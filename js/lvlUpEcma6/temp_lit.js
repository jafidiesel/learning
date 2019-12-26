const activities = [
    'running',
    'jumping',
    'swimming'
];

const activitiesBang = activities
    .map( (activity) => {
        return  `${activity}!`
    }).join(', ');

const message = `My name is bob and I enjoy ${activitiesBang}`

console.log(message)