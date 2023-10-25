import express from "express"
import mysql from "mysql"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import session from "express-session"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "root",
    database: "fs_hris_db"
})

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:6197"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: "user",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))


app.listen(6197, ()=>{
    console.log("Connected to backend mysql database!");
})

app.get("/", (req, res) => {
    res.json("Hi hmmm ano kaya dito?")
})

// -------------------- GENERAL METHODS --------------------------//

app.post("/login", (req, res) => {
    const work_email = req.body.work_email
    const password = req.body.password

    db.query(
        "SELECT * FROM user WHERE work_email = ? AND password = ?",
        [work_email, password], 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0) {
                req.session.user = result
                console.log(req.session.user)
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination"})
            }
        }
    )
});

// -------------------- ADMIN METHODS --------------------------//

app.get("/employeeslist", (req, res) => {
    const q = "SELECT * FROM emp"
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

// -------------------- EMPLOYEE METHODS --------------------------//


app.get("/users", (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
});

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
