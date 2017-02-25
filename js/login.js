let login = (username, password) =>{
  if (username !== 'admin' || password !== 'radical') {
    console.log('incorrect fucking login');
  }
};

login('admin', 'idunno');