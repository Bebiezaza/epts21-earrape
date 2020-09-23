module.exports = client => {
    client.user.setPresence({
        activity: {
            name: 'with 1.2.3_04\'s ICBM (Alpha)'
        }
    });
    console.log(`Ready!`);
};
