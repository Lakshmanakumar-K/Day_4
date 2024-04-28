// 1.Resume data in JSON format

let resume = {"Name":"LAKSHMANAKUMAR KANDASAMY","E-mail":"lakshmanakumar15p624@gmail.com","Mobile No":9688710590,"Permanent Address":"D- 205, Jubilee Residence, Guduvancheri, Chengalpattu-603202","Career Objective":["To learn and work on flexible technologies in a challenging environment","Enhance skills in my areas of interest in a sustainable manner","Contribute in growth of organization with highest degree of satisfaction"],"Work Experience":"2 Years 2 months","Present company":"Cognizant Technology Solutions","Designation":"Associate","Responsibilities":["Working as a Peoplesoft Admin, supporting HCM 9.2 and FSCM 9.2 applications running on Peopletools 8.59 for a reputed US based Travel company","Administering DEMO, DEV, TST, SND, UAT, UPG and PROD environments running on Peopletools version 8.59.13 and 8.58.14.","Responsible for applying quarterly Weblogic patching (WLS STACK PATCH BUNDLE) on prod and non-prod web servers.","Worked on Peopletools upgrade from 8.58.08 to 8.59.13 on non-prod instances.","Perform Peoplesoft Project, SQR Migration and DMS execution using Application Designer and other change management tools.","Worked on Implementation of LDAP (Microsoft Active Directory) for authentication on multiple instances.","Responsible for script execution and validation of instances, post completion of weekly refresh.","Worked on Peoplesoft Update Image(PI 42) installation.","Automated post refresh validation and DB user profile management with shell script."],"Programming Languages":["Java","Peoplecode","PL/SQL","Shell Script","Javascript"],"Academic Qualifications":{"2015-2020":"Bachelor of Engineering in Production (Sandwich) from P.S.G College of Technology with CGPA  8.1","2015":"Passed Higher secondary(12th) in Science from Tamil Nadu State board with percentage of 92","2013":"Passed Secondary(10th) in Science from Tamil Nadu State board with percentage of 96.8"},"Certifications":["Completed Oracle PL/SQL Intermediate course on October 2023.","Completed Oracle Cloud Infrastructure Foundation course on August 2022.","Cleared Hindi Language Examination (3 levels) conducted by Dakshina Bharat Hindi Prachar Sabha on 2011"],"Extra-curricular":["Worked as Director in College Rotaract club","Badminton zonal winner in year 2015"],"Strengths":["Good team player with communication skills","Fast learner with Collaborative skills."],"Personal Details":{"Father":"Kandasamy L","Gender":"Male","Marital Status":"Single","Language":"Tamil.English"},"Declaration":"I hereby declare that all the particulars stated in the resume are true to the best of my knowledge and belief.","Place":"Chennai","Date":"27/04/24","Signature":"K LAKSHMANAKUMAR"};
console.log(resume);

// 2.Above JSON iterate over for loop(for,for in,for of,for each)
// for
let arr = Object.keys(resume);
 let arr1 = Object.keys(resume[arr[10]]); // Collecting keys for Academic Qualifications
 let arr2 = Object.keys(resume[arr[14]]); // Collecting keys for personal details

//  for (let i=0; i<arr.length; i++){
//      console.log(arr[i] + " : " + resume[arr[i]]);
//  }
 for (let i=0; i<arr.length; i++){
     if (i == 10){
        for (let j=0; j<arr1.length; j++){
        console.log(arr[10] + " : " + arr1[j] + " : " + resume[arr[10]][arr1[j]]); 
        } 
     }
     else if (i == 14){
        for (let k=0; k<arr2.length; k++){
        console.log(arr[14] + " : " + arr2[k] + " : " + resume[arr[14]][arr2[k]]); 
        } 
     }
     else{
        console.log(arr[i] + " : " + resume[arr[i]]); 
     }
     
 }

// for in
//  for (let key in resume){
//      console.log(key + " : " + resume[key]);
//  }
 for (let key in resume){
    if(key == "Academic Qualifications"){
        for (let nestedkey in resume["Academic Qualifications"]){
            console.log(key + " : " + nestedkey + " : " + resume[key][nestedkey]);
        }
    }
    else if(key == "Personal Details"){
       for (let nestedkey in resume["Personal Details"]){
            console.log(key + " : " + nestedkey + " : " + resume[key][nestedkey]);
        } 
    }else{
    console.log(key + " : " + resume[key]);
}
}

//for of
// for (let [key,value] of Object.entries(resume)){
//     console.log(key + " : " + value);
// }
for (let [key,value] of Object.entries(resume)){
    if(key == "Academic Qualifications"){
        for (let [nestedkey,nestedvalue] of Object.entries(resume[key])){
            console.log(`${key} : ${nestedkey} : ${nestedvalue}`);
        }
    }
    else if(key == "Personal Details"){
        for (let [nestedkey] of Object.entries(resume[key])){
            console.log(`${key} : ${nestedkey} : ${resume[key][nestedkey]}`);
        }
    }else{
    console.log(`${key} : ${value}`);
    }
}

//for each
let arr = Object.keys(resume);
//arr.forEach((ele) => console.log(`${ele} : ${resume[ele]}`));
arr.forEach((ele) => {
    if (ele == "Academic Qualifications"){
        let arr = Object.keys(resume[ele]);
        arr.forEach((elem)=> console.log(`${ele} : ${elem} : ${resume[ele][elem]}`));
    }
    else if (ele == "Personal Details"){
        let arr = Object.keys(resume[ele]);
        arr.forEach((elem)=> console.log(`${ele} : ${elem} : ${resume[ele][elem]}`));
    }
    else{
        console.log(`${ele} : ${resume[ele]}`);
    }
});