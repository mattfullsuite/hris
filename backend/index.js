import express from "express"
import mysql from "mysql"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import session from "express-session"
import bodyParser from "body-parser"


dotenv.config({ path: './protected.env' })

const app = express()

const db = mysql.createConnection({
    /**host:"localhost",
    user:"root",
    password: "root",
    database: "fs_hris_db"**/
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
    methods: ["GET", "POST", "DELETE", "LOGOUT"],
    credentials: true
}
));

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24, //24 hours session
    }
}))


app.listen(6197, ()=>{
    console.log("Connected to backend mysql database!");
})

app.get("/", (req, res) => {
    res.json("Hi hmmm ano kaya dito?")
})

// -------------------- GENERAL METHODS --------------------------//

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

app.post("/login", (req, res) => {
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
                console.log(req.session.user)
                res.send(result[0]);
            } else {
                res.send({ message: "Wrong username/password combination"})
            }
        }
    )
});

app.post("/logout", function(req, res, next) {
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });

    console.log("logout called")
  })

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
    const q = "SELECT * FROM announcements"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.delete("/announcements/:ann_id", (req, res) => {
    const ann_id = req.params.ann_id;
    const q = "DELETE FROM announcements WHERE ann_id = ?";

    db.query(q, [ann_id], (err,data) => {
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

app.get("/showpendingleaves", (req, res) => {
    const q = "SELECT * FROM leaves AS l INNER JOIN emp AS e ON l.emp_id=e.emp_id WHERE leave_status = 0"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/showapprovedleaves", (req, res) => {
    const q = "SELECT * FROM leaves WHERE leave_status = 1"
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

app.post("")
