import { useState } from "react";

import { Container } from "components/container";
import { Header } from "components/header";
import { Search } from "components/search";
import { UserCard } from "components/user-card";

import {defaultUser} from 'mock'

import { GitHubError, GitHubUser, LocalGitHubUser } from "types/user";
import { isGitHubUser } from "utils/type-quards.util";
import { extractLocalUser } from "utils/exctact-local-user";

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

  const fetchUser = async (login: string) => {
    const response = await fetch(`${BASE_URL}${login}`);
    const user  = await response.json() as GitHubUser[] | GitHubError;

    if(isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }
  return (
    <Container>
      <Header/>
      <Search hasError = {!user} onSubmit={fetchUser}/>
      { user && <UserCard {...user}/>}
      
    </Container>
  );
}

export default App;
