import {Admin} from './Admin';

function getAdminInfo(admin : Admin) : void
{
    console.log(`Name: ${admin.name}, Department: ${admin.department}`);
}

const admin : Admin = {
    name: "Settawut Tangiam",
    department: "Software Engineer"
}

getAdminInfo(admin);