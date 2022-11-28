import axios from 'axios';

export type User = {
  id: number;
  login: string; // user name
};

export type IssueList = {
  number: number;
  title: string;
  user: User;
  created_at: string;
  comments: number;
};

const IssueApi = async () => {
  const url = `https://api.github.com/repos/angular/angular-cli/issues`;
  const response = await axios.get<IssueList[]>(url, {
    headers: {
      //   'Content-Type': 'application/json',
      Accept: 'application/vnd.github.full+json',
    },
  });
  return response.data;
};

export default IssueApi;
