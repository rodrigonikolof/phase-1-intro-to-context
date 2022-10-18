// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
        
        return {firstName,familyName,title,payPerHour, timeInEvents : [], timeOutEvents: []}
}


function createEmployeeRecords(records){
    let employeeRecords = []
    for (let record of records){
        employeeRecords.push(createEmployeeRecord(record))
    }
    return employeeRecords;
}

function createTimeInEvent(obj, event){
   let [date,hour] = event.split(' ');
    hour = parseInt(hour);
    obj.timeInEvents.push({
        type : 'TimeIn',
        date,
        hour
        
    })
    return obj
}

let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
let updatedBpRecord = createTimeOutEvent(bpRecord, "2015-02-28 1700")
let newEvent = updatedBpRecord.timeOutEvents[0]
console.log(updatedBpRecord)

function createTimeOutEvent(obj, timeStamp){
    let  [date,hour] = timeStamp.split(' ');
    hour = parseInt(hour);
    obj.timeOutEvents.push({
        type : 'TimeOut',
        date,
        hour,
    })
    return obj;
}

