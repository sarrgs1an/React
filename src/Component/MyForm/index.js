function MyForm (){
    return(
        <div>
            <label htmlFor = "name">Name</label>
            <input type = "text" id="name" name="name"/>
            <label htmlFor = "surname">Surname</label>
            <input type = "text" id="surname" name="surname"/>
            <label htmlFor = "phone">Phone</label>
            <input type = "tel" id="phone" name="phone"/>
        </div>
    );
  }
  export default MyForm;