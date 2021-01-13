import { Router } from 'express'
import * as AccountBackend from '@/server/AccountBackend'
const router = Router()
router.get('/',async(req, res)=>{
    res.json({
        testGetVerCode1:await testGetVerCode1(),
        testGetVerCode2:await testGetVerCode2(),
        testCheckVerCode:await testCheckVerCode(),
        testResetPassword1:await testResetPassword1(),
        testResetPassword2:await testResetPassword2(),
        testAddResume1:await testAddResume1(),
        testAddResume2:await testAddResume2(),
        testDeleteResume1:await testDeleteResume1(),
        testDeleteResume2:await testDeleteResume2(),
        testUpdateResume1:await testUpdateResume1(),
        testUpdateResume2:await testUpdateResume2(),
        testBlock1:await testBlock1(),
        testBlock2:await testBlock2(),
        testMakeID1:testMakeID1(),
        testMakeID2:testMakeID2(),
        testMakeID3:testMakeID3(),
    })
})
export default router


async function testGetVerCode1(){
    const res = await AccountBackend.getVerCode("hungjiewu@gmail.com")
    return res
}

async function testGetVerCode2(){
    const res = await AccountBackend.getVerCode("123@gmail.com")
    return res
}

// async function testCheckVerCode1(){
//     const res = await AccountBackend.checkVerCode("hungjiewu@gmail.com","2BJkDe")
//     return res === 200
// }

// async function testCheckVerCode2(){
//     const res = await AccountBackend.checkVerCode("hungjiewu@gmail.com","VpFOSk")
//     return res === 402
// }

async function testCheckVerCode(){
    const res = await AccountBackend.checkVerCode("hungjiewu@gmail.com","123ABC")
    return res
}

async function testResetPassword1(){
    const res = await AccountBackend.resetPassword("hungjiewu@gmail.com","ee79976c9380d5e337fc1c095ece8c8f22f91f306ceeb161fa51fecede2c4ba1")
    return res
}

async function testResetPassword2(){
    const res = await AccountBackend.resetPassword("123@gmail.com","ee79976c9380d5e337fc1c095ece8c8f22f91f306ceeb161fa51fecede2c4ba1")
    return res
}

async function testAddResume1(){
    const res = await AccountBackend.addResume(Object("5fe3444644aeb23ee87a38d8"),"Test","TestContent")
    return res
}
async function testAddResume2(){
    const res = await AccountBackend.addResume(Object("9fe3444644aeb23ee87a38d8"),"Test","TestContent")
    return res
}
async function testDeleteResume1(){
    const res = await AccountBackend.deleteResume(Object("5fe3444644aeb23ee87a38d8"),"5ffe798eb78fee2e40f2e2e2")
    return res
}
async function testDeleteResume2(){
    const res = await AccountBackend.deleteResume(Object("9fe3444644aeb23ee87a38d8"),"5ffe798eb78fee2e40f2e2e2")
    return res
}
async function testUpdateResume1(){
    const res = await AccountBackend.updateResume(Object("5fe3444644aeb23ee87a38d8"),"5ffef7eabdc33302cc302fd3","LeBron James","King James")
    return res
}

async function testUpdateResume2(){
    const res = await AccountBackend.updateResume(Object("9fe3444644aeb23ee87a38d8"),"5ffef7eabdc33302cc302fd3","LeBron James","King James")
    return res
}


async function testBlock1(){
    const res = await AccountBackend.block(Object("5fe3444644aeb23ee87a38d8"),Object("5fd0eeb94dd4a0504478a60f"))
    return res
}

async function testBlock2(){
    const res = await AccountBackend.block(Object("5fe3444644aeb23ee87a38d8"),Object("8fd0eeb94dd4a0504478a60f"))
    return res
}



function testMakeID1(){
    const res = AccountBackend.makeid(6)
    return res.length
}

function testMakeID2(){
    const res = AccountBackend.makeid(-1)
    return res.length
}

function testMakeID3(){
    const res = AccountBackend.makeid(100)
    return res.length
}

