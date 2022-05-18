import Mock from 'mockjs'
 
Mock.setup({
    timeout: '300-600'
  });

const data={ 
    "id":"@guid",
    "name":"@cname",
};
 
Mock.mock('/api/data', data)
 
export default Mock;