module.exports = client => {
    client.user.setPresence({
        activity: {
            name: 'dont force discon me or i will crash'
        }
    });
    console.log('Ready!');
};
