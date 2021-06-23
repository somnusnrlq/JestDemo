前端自动化测试

## 环境搭建

初始化项目

```
npm init
```

安装 jest

```
npm install jest -D
```

package.json 中添加命令代码

```
{
  "name": "jesttest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  }
}
```

## 基本配置和测试覆盖率生成

```
npx jest --init
```

生成一个代码测试覆盖率的说明

```
 npx jest --coverage
```

## 匹配器

> > 写完代码后可以使用 yarn test 运行 官方文档参考： https://jestjs.io/docs/en/expect

toBe 完全相等
toEqual 内容结果匹配
toBeNull Null 的结果匹配
toBeUndefined 匹配 undefined
toBeDefined 只要定义过了，都可以匹配成功
toBeTruthy 只要是返回的 true 就可以通过测试
toBeFalsy 只要是返回的 false 就可以通过测试

toBeGreaterThan 数字比较的,只要大于传入的数值，就可以通过测试
toBeLessThan 少于一个数字时，就可以通过测试
toBeGreaterThanOrEqual 测试结果数据大于等于期待数字时，可以通过测试
toBeGreaterThanOrEqual 小于等于测试的通过
toBeCloseTo 自动消除 JavaScript 浮点精度错误

toMatch 字符串包含匹配器
toContain 数组的匹配器
toThrow 对异常进行处理的匹配器，检测一个方法会不会抛出异常

```
test('测试严格相等',()=>{
    const a = {number:'007'}
    expect(a).toBe({number:'007'})
})
```

## 开启自动测试

每次修改测试用例，我们都手动输入 yarn test ，这显得很 lower。可以通过配置 package.json 文件来设置。修改如下：

```
{
  "name": "jesttest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest --watchAll",
    "coverage":"jest --coverage"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  }
}

```

## 安装 Babel 转换器来支持 ES6 import

```
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
```

配置.babelrc 文件即可

## 异步请求数据

```
import { fetchData } from './fetchData.js'

test('fetchData 测试',()=>{
   fetchData((data)=>{
       expect(data).toEqual({
           success: true
       })
        done()
   })
  })

```

Promise 写法

```
test('FetchTwoData 测试', ()=>{
    return  fetchTwoData().then((response)=>{
        expect(response.data).toEqual({
            success: true
        })
    })
  })
```
404测试
```
test('FetchThreeData 测试', ()=>{
      expect.assertions(1)  // 断言，必须执行一次expect
      return fetchThreeData().catch((e)=>{
        expect(e.toString().indexOf('404')> -1).toBe(true)

      })
  })
```
