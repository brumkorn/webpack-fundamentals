let login = (username, password) =>{
  if (username !== 'admin' || password !== 'radical') {
    console.log('incorrect @#!@$g login');
  }
};

login('admin', 'idunno');
export {login};