import { JOB_MATCH } from '../actions/Job_Matches';
// console.log(JOB_MATCH + '-------');
export default function (state = [], action) {
  // action.type is undefined for some reason
  switch(action.type) {
    case JOB_MATCH:
      // take all objects payload.data and put it into a new array
      const current = [...action.payload.data];
      // map over the object and create a mean array
      const array = current.map(job => {
        const mean = [Number((job.salary_min + job.salary_max) / 2), (Number(job.equity_min) + Number(job.equity_max)) / 2];
        job.mean = mean;
        return job;
      });

      // create the user data based on the offer input from meta
      const userData = {
        mean: [action.meta.salary, action.meta.equity],
        title: action.meta.title,
        user: true,
      };

      array.push(userData);
      return array;
  }
  return state;
}