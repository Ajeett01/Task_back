let tasks_list = [
  {
    task_Id: "hkhkhklhl2135235",
    title: "Do coding",
    description:
      "coding has to be done daily",
    status: "pending",
  },
  {
    task_Id: "sadgsd3532",
    title: "Do physics",
    description:
      "physics study dillasdgjlksaj;dlgjsadlkgjlksjadlgjlsjadlgjlksjdalgkjslajgldsja",
    status: "completed",
  },
  {
    task_Id: "23hrl2k",
    title: "asgasgDo coding",
    description:
      "jslkadjglkjsdlkgjlksdjlkgjslkadjgjslkadgj sadjg lks jadlgjlsadjgkljasdl gasd lk ",
    status: "pending",
  },
  {
    task_Id: "2533wfsdgsd",
    title: "Do coasgasdgding",
    description:
      "sdglksjdlajgls dalgj sdagsdagjlksadj gljasldjg as",
    status: "pending",
  },
  {
    task_Id: "32t2ewdsgds",
    title: "Do codasdggsding",
    description:
      "sadhgshdaghshd gsd g sdkajg sjad glajs gjkldsj glas gsjd gasld gjdsa ",
    status: "pending",
  },
  {
    task_Id: "hkhkhklhl2sdgsa2135235",
    title: "Do coding",
    description:
      "hasdkgks adgjsjdglkjsdlgjlks djas dgsa jglsajlg lsajlkgj lsakjgkla jslg kasd",
    status: "completed",
  },
  
];

import connectDB from "../config/db.js";
import Task from "../models/tasks.js";

const importData = async () => {
  try {
    await Task.deleteMany();

    const insertedTasks = await Task.insertMany(tasks_list);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};


export default tasks_list;
