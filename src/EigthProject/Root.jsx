import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";


const gettingLocalStorageItem =() =>{
  let list = localStorage.getItem('list');  // if inside the list items there then do if condition statement otherwise simply return the empty array []
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }

}

function Root() {
  const [name, setName] = useState("");
  const [list, setList] = useState(gettingLocalStorageItem());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlertFunc(true, "danger", "Please Enter Something");
    } 
    else if (name && isEditing) {
      setList(list.map((item)=>{
        if(item.id === editID){
          return {...item,title:name}
        }
        return item
      }))
      setName('')
      setIsEditing(false)
      setEditID(null)
      showAlertFunc(true,"edited","Item Is Edited")
      
    
    } 
    else {
      showAlertFunc(true, "success", "Item Added");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlertFunc = (show = false, type = "", msg = "") => {
    setAlert({ show: show, type: type, msg: msg });

    //we  can write this like this also
    //showAlert{{show,type,msg}} // es6 feature when property name ,value name are same then we can write like this
  };

  // This function is to delete all the items ClearingList
  const ClearingList = () => {
    showAlertFunc(true, "danger", "All items are Deleted");
    setList([]);
  };
  // This function is to remove Individual Item in the List

  const RemovingSingleItem = (id) => {
    showAlertFunc(true, "danger", "Item Deleted");
    const RemoveItem = list.filter((item) => item.id !== id);
    setList(RemoveItem);
  };

  // This function is for editing of single item
  const editItem = (id) =>{
    const specificItem = list.find((item)=>item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title)
  

    // console.log(id)
    // console.log(specificItem.title)
  }




  // This functionality is for local storage
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])



  return (
    <main className="todo">
      <div className="firstForm">
        <form onSubmit={handleSubmit}>
          <div className="alert-class">
            {alert.show && <Alert {...alert} SettingAlert={showAlertFunc} list={list}/>}
          </div>

          <h1 style={{ textAlign: "center" }}>TO-DO-List</h1>

          <div className="input-class">
            <input
              type="text"
              placeholder="Enter Something"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
          </div>
        </form>

        {list.length > 0 && (
          <div className="class-list">
            <div className="list-class">
              <List items={list} RemoveItem={RemovingSingleItem} editItem={editItem}/>
            </div>
            <div className="btn">
              <button type="button" onClick={ClearingList}>
                Clear Items
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Root;
