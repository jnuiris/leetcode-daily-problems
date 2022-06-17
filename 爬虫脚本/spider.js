const axios = require('axios')

function getPages(page) {
    axios.post('https://leetcode.cn/graphql/', {
        params: {
            categorySlug: "",
            filters: {
                status: 'AC'
            },
            limit: 50,
            skip: 0
        },
        // headers: {
        //     cookie: {
        //         gr_user_id: 'e7823c9a-2a17-4414-86de-6cf4f1a36041',
        //         _bl_uid: '67lO84tw32wshd29wtdqpbLr43hy',
        //         csrftoken:
        //     }
        // }
    }).then(res => {
        console.log(res)
    })
}

