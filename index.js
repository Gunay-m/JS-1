let telebeler=[{
    fin: "548CGF8",
    ad:"Meherem",
    soyad:"Dadashov",
    isStudent: true,
 
    
},{
    fin:"POU547L",
    ad:"Gunay",
    soyad:"Mahmudova",
    isStudent: true,
   
    
}, {fin:"KJH87IG",
    ad:"Kenan",
    soyad:"Babayev",
    isStudent: false,
    }
]

for(let i=0; i<telebeler.length;i++){
          document.querySelector("tbody").innerHTML+=`
           <tr>
            <th scope="row">${telebeler[i].fin}</th>
            <td>${telebeler[i].soyad}</td>
            <td>${telebeler[i].ad}</td>
            <td>${telebeler[i].isStudent?"Telebedir":"Telebe deyil"}</td>
            <td> <i class="fa-regular fa-pen-to-square"></i></td>
            <td><i class="fa-regular fa-trash-can"></i></td>
          </tr> 
          `}