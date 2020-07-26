module.exports = client => {
    client.user.setPresence({
        activity: {
            name: 'with ICBM'
        }
    });
    console.log(`Ready!`);
};