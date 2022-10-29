const userData = require("../data");

// CRUD


// Read
const getUser = async (req, res) => {
    try {
        const {params: {id}} = req;

        const prueba = userData.findIndex(user => Number(id) === user.id);
        res.send({
            status:200,
            user:{
                fullName: (`${firstName} ${lastName} ${maidenName}`),
                email,
                age,
                address,
                jobTitle: userData.company.title
            }
        })
           

        } catch (error) {
        console.log(error);
        res.send({
            status: 500,
            user: {}
        })
    }
};


// Update
const updateUser = async (req, res) => {
    try {
        const {params: {id},body:newAddress} = req;
        const currentUser = usersData.findIndex(user => Number(id) === user.id);
        let user={...currentUser,address:newAddress};
      
        res.send({
            status: 200,
            user
        });

    } catch (error) {
        console.log(error);
    }
};

//Create User
const createUser = async (req, res) => {
    try{
        const {body : { email }} = req;
        const newID = userData[userData.length].id +1;
        userData.push({"id":newID, email})
        res.send({
            status: 200,
            user: userData.map(({id, email})=>({id, email}))
        })
        console.log(userData)
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});
        
    }
}

const deleteUser = async (req, res) => {
    try {
        const {params : { id }} = req;
        const user = userData.find(x => x.id == id);

        if (!user) {
            res.send({
                status: 404,
                user: {}
            })
        }
        else {
            userData.splice(id, 1);
            res.send({
                status: 200,
                user: userData.map(({id, email})=>({id, email}))
            }) 
        }
        
    }catch(error){
        res.send({
            status:500,
            error});
        
    }
}

module.exports = {
    getUser,
    updateUser,
    createUser,
    deleteUser
}