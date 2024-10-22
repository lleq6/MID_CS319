async function fetchStudentData()
{
    const Respone = new Promise<{name : string, grades : number[]}>((resolve, reject) => {
        setTimeout(() => {
            const IsSuccess = true;
            if (IsSuccess) 
            {
                resolve({
                    name: "Settawut Tangiam",
                    grades: [90, 75, 80]
                });
            } 
            else 
            {
                reject("Failed to fetch student data");
            }
        }, 1000);
    });
    try 
    {
        const Data = await Respone;
        console.log("Data = ", Data);
    } 
    catch (error) 
    {
        console.error('Error:', error);
    }
}

fetchStudentData();