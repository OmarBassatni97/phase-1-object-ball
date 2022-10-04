const gameObject = () => {
    return {
        home: {
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:{
                'Alan Anderson':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                'Reggie Evans':{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                'Brook Lopez':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                'Mason Plumlee':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                'Jason Terry':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
            }
        },
        // away: {
        //     teamName,
        //     colors,
        //     players
        // },

    }
}

console.log(gameObject()['home']['players']);