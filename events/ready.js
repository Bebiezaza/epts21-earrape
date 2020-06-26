module.exports = client => {
    client.user.setPresence({
        activity: {
            name: 'copied code made earrape'
        }
    });
    console.log('Ready!');
};