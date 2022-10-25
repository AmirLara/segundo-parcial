const userData = require("../data");

// CRUD


// Read
const getUser = async (req, res) => {
    try {
        const {params: {id}} = req;

        const prueba = userData.findIndex(user => Number(id) === user.id);
        console.log(userData.findIndex(user => Number(id) === user.id));
        if (userIndex != -1) {
        
        }
        else {
            res.send({
                status: 404,
                user: {}
            });
        }
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
        const {body: direccion} = req;
        const userIndex = usersData.findIndex(user => Number(id) === user.id);

        movieDB.update({
            author,
            name,
            rating,
            time
        });

        res.send({
            status: 200,
            id
        });

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getUser,
    updateUser
}