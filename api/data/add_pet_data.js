const addPet = (petName) =>  ({
    "id": 0,
    "category": {
        "id": 0,
        "name": "string"
    },
    "name": petName,
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
        "id": 0,
        "name": "string"
        }
    ],
    "status": "available"
});

module.exports = {
    addPet
}