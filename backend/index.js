/**import express from "express"
import mysql from "mysql"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import session from "express-session"
import bodyParser from "body-parser"**/

var express = require("express")
var mysql = require( "mysql")
var cors = require("cors")
var dotenv = require("dotenv")
var cookieParser = require("cookie-parser")
var session = require("express-session")
var bodyParser = require("body-parser")
var cron = require('node-cron')

var HomeHandler = require("./handlers/authentication/home.js");
//var LoginHandler = require( "./handlers/authentication/login.js");
//var ProcessLoginHandler = require("./handlers/process-login.js")
var LogoutHandler = require("./handlers/authentication/logout.js");

var DailyPTOAccrual = require("./handlers/utilities/cron-daily.js")


dotenv.config({ path: './protected.env' })

const app = express()

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

db.connect ( (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL connected...")
    }
})

app.use(express.json());
app.use(cors(
    {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}
));

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: "userId",
    secret: "kahitanomalagaydito",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24, 
    }
}))


app.listen(6197, ()=>{
    console.log("Connected to backend mysql database!");
})

/**app.get("/", (req, res) => {
    res.json("Hi hmmm ano kaya dito?")
})**/

// -------------------- GENERAL METHODS --------------------------//

app.get('/', HomeHandler);

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

//app.post("/processlogin", ProcessLoginHandler);

app.post("/processlogin", (req, res) => {
    const work_email = req.body.work_email
    const password = req.body.password

    db.query(
        "SELECT * FROM emp WHERE work_email = ? AND password = ?",
        [work_email, password], 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0) {
                req.session.user = result
                req.session.firstName = result.f_name
                console.log(req.session.user)
                res.send(result[0]);
            } else {
                res.send({ message: "Wrong username/password combination"})
            }
        }
    )
});

app.get('/logout', LogoutHandler)


// -------------------- ADMIN METHODS --------------------------//

app.get("/employeeslist", (req, res) => {
    const q = "SELECT * FROM emp ORDER BY s_name"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.delete("/employeesList/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    const q = "DELETE FROM emp WHERE user_id = ?";

    db.query(q, [user_id], (err,data) => {
        if(err) return res.json(err)
        return res.json("Employee has been deleted successfully.")
    })
})

app.post('/addEmployee', (req,res) => {

    const q = "INSERT INTO `emp`(`user_id`, `work_email`, `f_name`, `m_name`, `s_name`, `personal_email`, `contact_num`, `dob`, `p_address`, `c_address`, `date_hired`, `sex`, `created_by`, `updated_by`) VALUES (?)";
    const values = 
        [req.body.user_id, 
        req.body.work_email,
        req.body.f_name,
        req.body.m_name, 
        req.body.s_name,
        req.body.personal_email,
        req.body.contact_num,
        req.body.dob,
        req.body.p_address,
        req.body.c_address,
        req.body.date_hired,
        req.body.sex,
        req.body.created_by,
        req.body.updated_by]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("New employee added!")
    })

})

// -------------------- ANNOUNCEMENT METHODS --------------------------//

app.get("/announcements", (req, res) => {
    const q = "SELECT * FROM announcements AS a INNER JOIN emp AS e ON a.emp_id=e.emp_id LIMIT 3" 
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.delete("/announcements/:ann_id", (req, res) => {
    const ann_id = req.params.ann_id;
    const q = "DELETE FROM announcements WHERE ann_id = ?";

    db.query(q, 
        [ann_id], 
        (err,data) => {
        if (err){
            console.log(err)
        } else {
            res.json("Announcement #" + ann_id + "has been deleted successfully.")
        }
    })
})

app.post('/addEmployee', (req,res) => {

    "INSERT INTO `announcements` (`ann_id`, `emp_id`, `ann_title`, `ann_content`, `ann_category`) VALUES (?)";
    const values = 
        [req.body.emp_id,
         req.body.ann_title,
         req.body.ann_title,
         req.ann_content,
         req.ann_category,]

    db.query(q, [values], (err, data) => {
        if (err){
            console.log(err)
        } else {
            console.log("New Announcement added!")
        }
    })

})

// -------------------- EMPLOYEE METHODS --------------------------//

app.get("/employeeProfile/:emp_id", (req, res) => {
    const fetchid=req.params.emp_id;
    db.query(
        "SELECT * FROM emp WHERE emp_id=?",
        fetchid, (err, result) => {
            if (err){
                console.log(err);
            } else {
                var value=JSON.parse(JSON.stringify(result))
                console.log(value[0].f_name)
                console.log(value[0].m_name)
                console.log(value[0].s_name)
            }
        })
})

app.post("/addcompany", (req,res) => {
    const q = "INSERT INTO company (`company_id`, `company_name`, `company_loc`) VALUES (?) "
    const values = [2, "TeeTalkPH", "Baguio City"] 

    db.query(q, [values], (err, data)=> { 
        if (err) return res.json(err)
        return res.json("Company has been created successfully!")
    })
})

app.get("/showdirectory", (req, res) => {
    const q = "SELECT * FROM department as d INNER JOIN department_employees AS de ON d.dept_id=de.dept_id INNER JOIN emp AS e ON de.emp_id = e.emp_id INNER JOIN title as t ON e.emp_id = t.emp_id"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/getUserPTO", (req, res) => {
    const uid = req.session.user[0].emp_id
    const q = "SELECT * FROM `leave_credits` AS l INNER JOIN `emp` AS e ON l.emp_id = e.emp_id WHERE e.emp_id = ?"

    db.query(q,
        [uid],
        (err,data)=> {
        if(err) {
            return res.json(err)
        }

        return res.json(data)
    })
})


//TL

app.get("/showpendingdepartmentleaves", (req, res) => {
    const uid = req.session.user[0].emp_id

    const q = "SELECT * FROM leaves AS l INNER JOIN emp AS e ON l.requester_id=e.emp_id WHERE leave_status = 0 AND approver_id = ?"
    
    db.query(q,
        [uid],
        (err,data)=> {
        if(err) {
            return res.json(err)
        }

        return res.json(data)
    })
})

app.get("/showrejecteddepartmentleaves", (req, res) => {
    const uid = req.session.user[0].emp_id

    const q = "SELECT * FROM leaves AS l INNER JOIN emp AS e ON l.requester_id=e.emp_id WHERE leave_status = 2 AND approver_id = ?"
    
    db.query(q,
        [uid],
        (err,data)=> {
        if(err) {
            return res.json(err)
        }

        return res.json(data)
    })
})

//HR
app.get("/showpendingleaves", (req, res) => {
    const q = "SELECT * FROM leaves INNER JOIN emp ON requester_id=emp_id WHERE leave_status = 0"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/showapprovedleaves", (req, res) => {
    const q = "SELECT * FROM leaves AS l INNER JOIN emp AS e ON l.requester_id=e.emp_id WHERE leave_status = 1"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/showrejectedleaves", (req, res) => {
    const q = "SELECT * FROM leaves WHERE leave_status = 2"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Approve
app.post("/showpendingleaves/:leave_id", (req, res) => {
    const leave_id = req.params.leave_id;
    const q = "UPDATE leaves SET leave_status = ? WHERE leave_id = ?";

    db.query(q, 
        [1, leave_id], 
        (err,data) => {
        if (err){
            console.log(err)
        } else {
            res.json("Leave #" + leave_id + "has been updated successfully.")
        }
    })
})



//ptoprobi

app.post("/ptoProbationary", (req, res) => {
    var currDate = "2024-02-29";
    const q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
    "SET emp_status = 'REGULAR', leave_balance = leave_balance + 5 " +
     "WHERE emp_status = 'PROBATIONARY' AND date_regularization = CURDATE()"
    
    db.query(q,(err,data)=> {
        if(err) {
            return res.json(err)
        }
        console.log("Rows affected")
        return res.json(data)
    })
})

//ptoRegular

app.post("/ptoRegular", (req, res) => {
    const q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
    "SET leave_balance = leave_balance + 0.83 " +
     "WHERE emp_status = 'REGULAR' AND LAST_DAY(CURDATE()) = CURDATE()"
    
    db.query(q,(err,data)=> {
        if(err) {
            return res.json(err)
        }
        console.log("Rows affected")
        return res.json(data)
    })
})

//pto1year
app.post("/ptoTenure", (req, res) => {
    const q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
    "SET leave_balance = leave_balance + 1.25 " +
    "WHERE date_hired < DATE_SUB(NOW(),INTERVAL 1 YEAR) AND emp_status = 'REGULAR' AND LAST_DAY(CURDATE()) = CURDATE()"
    
    db.query(q,(err,data)=> {
        if(err) {
            return res.json(err)
        }
        console.log("Rows affected")
        return res.json(data)
    })
})

//refreshPTOinMarch
app.post("/ptoRefresh", (req, res) => {
    const q = "UPDATE leave_credits" +
    "SET leave_balance = 0 " +
     "WHERE DAY(GetDate()) = 1 AND DAY(GetMonth()) = 3"
    
    db.query(q,(err,data)=> {
        if(err) {
            return res.json(err)
        }
        console.log("Rows affected")
        return res.json(data)
    })
})

//PTO working Student
app.post("/ptoTenure", (req, res) => {
    const q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
    "SET leave_balance = leave_balance + 1.25 " +
    "WHERE date_hired < DATE_SUB(NOW(),INTERVAL 1 YEAR) AND emp_status = 'REGULAR' AND LAST_DAY(CURDATE()) = CURDATE()"
    
    db.query(q,(err,data)=> {
        if(err) {
            return res.json(err)
        }
        console.log("Rows affected")
        return res.json(data)
    })
})

//Reject
app.post("/rejectleave/:leave_id", (req, res) => {
    const leave_id = req.params.leave_id;
    const q = "UPDATE leaves SET leave_status = ? WHERE leave_id = ?";

    db.query(q, 
        [2, leave_id], 
        (err,data) => {
        if (err){
            console.log(err)
        } else {
            res.json("Leave #" + leave_id + "has been updated successfully.")
        }
    })
})


//Check Upcoming Bdays
app.get("/getupcomingbdays", (req, res) => {
    const q = "SELECT * FROM emp ORDER BY DAYOFYEAR(dob) < DAYOFYEAR(CURDATE()) , DAYOFYEAR(dob) LIMIT 5;"

    db.query(q, (err, data) => {
        if (err){
            console.log(err)
        } else {
            res.json(data)
        }
    }) 
})

app.get("/getupcominganniversaries", (req, res) => {
    const q = "SELECT * FROM emp ORDER BY DAYOFYEAR(date_hired) < DAYOFYEAR(CURDATE()) , DAYOFYEAR(date_hired) LIMIT 5;"

    db.query(q, (err, data) => {
        if (err){
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

//HR Dashboard
app.get("countAllEmployees", (req, res) => {
    const q = "SELECT COUNT(*) FROM emp WHERE date_separated IS NULL"

    db.query(q, (err, count) => {
        if (err){
            res.json(err)
        } else {
            res.json(count)
        }
    })
})

app.get("/myDeclinedLeaves", (req, res) => {
    const q = "SELECT * FROM leaves WHERE leave_status = 2 AND emp_id = ?"

    db.query(q, req.session.user[0].emp_id, (err, data => {
        if (err) return (json.err)
        else {
            return json(data)
        }
    }))
})

app.get("/myPendingLeaves", (req, res) => {
    const q = "SELECT * FROM leaves WHERE leave_status = 0 AND emp_id = ?"

    db.query(q, req.session.user[0].emp_id, (err, data => {
        if (err) return (json.err)
        else {
            return json(data)
        }
    }))
})

app.get("/myApprovedLeaves", (req, res) => {
    const q = "SELECT * FROM leaves WHERE leave_status = 1 AND emp_id = ?"

    db.query(q, req.session.user[0].emp_id, (err, data => {
        if (err) return (json.err)
        else {
            return json(data)
        }
    }))
})

app.get("/myDepartmentPendingLeaves", (req, res) => {

})

/** --------------------- CRON Jobs --------------------------- **/

cron.schedule("0 0 * * *", function () {
    dailyPtoAccrual();
});

cron.schedule("0 0 1 1 *", function() {
    yearlyAccrual();
})

function yearlyAccrual() { 
    const year_q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
    "SET leave_balance = leave_balance + 6 " +
    "WHERE date_hired < DATE_SUB(NOW(),INTERVAL 1 YEAR) AND emp_status = 'WORKING_SCHOLAR'"

    db.query(year_q,(err,data)=> {
        if(err) {
            return console.log(err)
        }
        console.log("Working Scholar yearly accrual done.")
    })
}

function dailyPtoAccrual() {

    const prob_q ="UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
        "SET emp_status = 'REGULAR', leave_balance = leave_balance + 5 " +
        "WHERE emp_status = 'PROBATIONARY' AND date_regularization = CURDATE()";

    const reg_q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
        "SET leave_balance = leave_balance + 0.83 " +
        "WHERE emp_status = 'REGULAR' AND LAST_DAY(CURDATE()) = CURDATE()"

    const tenure_q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
        "SET leave_balance = leave_balance + 1.25 " +
        "WHERE date_hired < DATE_SUB(NOW(),INTERVAL 1 YEAR) AND emp_status = 'REGULAR' AND LAST_DAY(CURDATE()) = CURDATE()"

    const scholar_q = "UPDATE emp e JOIN leave_credits l ON e.emp_id = l.emp_id " +
        "SET leave_balance = leave_balance + 0.625 " +
        "WHERE date_hired < DATE_SUB(NOW(),INTERVAL 1 YEAR) AND emp_status = 'WORKING_SCHOLAR' AND LAST_DAY(CURDATE()) = CURDATE()"
    
    db.query(prob_q,(err,data) => {
        if(err) {
            return console.log(err)
        }
        console.log("Probationary PTO accrual done.")
    })
    
    db.query(reg_q,(err,data)=> {
        if(err) {
            return console.log(err)
        }
        console.log("Regular PTO accrual done.")
    })
    
    db.query(tenure_q,(err,data)=> {
        if(err) {
            return console.log(err)
        }
        console.log("Tenured PTO accrual done.")
    })
    
    db.query(scholar_q,(err,data)=> {
        if(err) {
            return console.log(err)
        }
        console.log("Working Scholar accrual done.")
    })
}

app.post("/fileLeave", (req, res)=> {
    const q = "INSERT INTO leaves (`requester_id`, `leave_type`, `leave_reason`, `leave_from`, `leave_to`, `leave_status`, `approver_id`) VALUES (?)"

    const values = [
        1, //1
        req.body.leave_type,
        req.body.leave_reason,
        req.body.leave_from,
        req.body.leave_to,
        0,
        8,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
