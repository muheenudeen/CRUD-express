const data = {
    
    title: '',
    description: '',
    color:''
    
  };
  
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    


    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  