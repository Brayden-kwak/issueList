import axios from 'axios';

export type User = {
  id: number;
  login: string; // user name
  avatar_url: string;
};

export type IssueList = {
  number: number;
  title: string;
  user: User;
  created_at: string;
  comments: number;
  body: string;
  type: string;
};

const IssueApi = async () => {
  const url = `https://api.github.com/repos/angular/angular-cli/issues`;
  const response = await axios.get<IssueList>(url, {
    headers: {
      Accept: 'application/vnd.github.full+json',
    },
  });
  return response.data;
};

export default IssueApi;
