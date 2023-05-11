const data = [ 
    { id: 1, name: "Apple", price: 1.99 }, 
    { id: 2, name: "Banana", price: 0.99 }, 
    { id: 3, name: "Orange", price: 1.49 } 
  ];




function ProductTable(props) { 
    const { data } = props; 
   
    return ( 
      <table> 
        <thead> 
          <tr> 
            <th>ID</th> 
            <th>Name</th> 
            <th>Price</th> 
          </tr> 
        </thead> 
        <tbody> 
          {data.map(item => ( 
            <tr key={item.id}> 
              <td>{item.id}</td> 
              <td>{item.name}</td> 
              <td>{item.price}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    ); 
  }
  
  
