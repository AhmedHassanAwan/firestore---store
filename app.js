

import { collection, addDoc , getDocs , Timestamp ,   query,  deleteDoc , doc, updateDoc ,where   } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

import {auth , db } from "./config.js";

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const btn = document.querySelector("#btn");
const div = document.querySelector("#card");

// const array = []


btn.addEventListener("click",async(e)=>{
  e.preventDefault()
  console.log(title.value);
  console.log(description.value);

  try {
    const docRef = await addDoc(collection(db, "users"), {
      title : title.value,
      description : description.value,
      uid: auth.currentUser.uid,
      date: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  renderData()

}); // btn 


  // render Data

  async function renderData() {
    const arrray = []
    const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
    // const q = query(collection(db, "users"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    arrray.push({...doc.data(), DocID : doc.id})

    });
    console.log(arrray);
    
    console.log(arrray);
    div.innerHTML = ""
    arrray.map((items)=>{
      div.innerHTML += `
      <div class="card">
  <div class="card-header">
    Todo
  </div>
  <div class="card-body">
    <p><strong>Title:</strong> ${items.title}</p>
    <p><strong>Description:</strong> ${items.description}</p>
    <p><strong>Time:</strong> ${new Date(items.date.toDate()).toLocaleString()}</p>
    <button type="button" class="btn btn-danger deletebtn" data-id="${items.DocID}">Delete</button>
    <button type="button" class="btn btn-info editbtn" editbtn data-id="${items.DocID}">Edit</button>
  </div>
</div> </br>`
    })
    
    deletebtn()  // deletebtn
    editbtn()    // editbtn
  }

  



// delete btn
function deletebtn() {
  console.log("delete fun");
  const deletebtns = document.querySelectorAll(".deletebtn");

  deletebtns.forEach((btn1) => {
    btn1.addEventListener("click", async () => {
      const docID = btn1.getAttribute("data-id");
      console.log("Document ID:", docID);

      try {
        await deleteDoc(doc(db, "users", docID));  
        console.log("Document deleted successfully");
        renderData();  
      } catch (error) {
        console.log("Error deleting document:", error);
      }
      
      console.log("Hello Ahmed");
    });
  });
}





// edit 

function editbtn() {
  const editButtons = document.querySelectorAll(".editbtn");

  editButtons.forEach((button)=>{
    button.addEventListener("click",async()=>{
      const docID = button.getAttribute("data-id");
      const newtittle = prompt("Enter new value")
      const newdescription = prompt("Enter new value")


      if(newtittle && newdescription ){
        try {
          
        const Ref = doc(db, "users", docID);

        await updateDoc(Ref, {
          title :newtittle,
          description : newdescription
        });
        renderData()
          
        } catch (error) {
          console.log(error);
          
          
        }
      }




      
    })
  })

  
}


























