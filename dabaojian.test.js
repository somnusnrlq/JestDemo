// const dabaojian = require('./dabaojian.js')
// const { baojian1 , baojian2 }  = dabaojian
import { baojian1 , baojian2 } from './dabaojian.js'

test('保健1 300元',()=>{
    expect(baojian1(300)).toBe('至尊享受')
})

test('保健2  2000元',()=>{
    expect(baojian2(2000)).toBe('双人服务')
})