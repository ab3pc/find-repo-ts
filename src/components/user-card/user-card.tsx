import { UserInfo } from 'components/user-info';
import { UserStat } from 'components/user-stat';
import { UserTitle } from 'components/user-title';
import { LocalGitHubUser } from 'types/user';

import styles from './user-card.module.scss';

interface UserCardProps extends LocalGitHubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      src={props.avatar}
      alt={props.login}
      className={styles.avatar}
      />
    <UserTitle
      name={props.name}
      login={props.login}
      created={props.created}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
  </div>
);
