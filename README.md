# mock-server
a nodejs backend server to mock data  
  
  
把数据放到data文件夹里，用url路径做json文件的文件名，url中的“/”改成“.”。访问url，会返回对应的json文件  
比如：访问http://localhost:3000/api/user/login 会返回 api.user.login.json
