import { useState } from 'react';

export function TwitterFollowCard ({ username, children, formatUsername, isFollowingInitial }) {
  const [isFollowing, setIsFollowing] = useState(isFollowingInitial);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  function handleClick () {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className='tw-followCard'>

      <header className='tw-followCard-header'>

        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${username}`}
          alt={`Avatar ${username}`}
        />

        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>{formatUsername(username)}</span>
        </div>

      </header>

      <aside>

        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>

      </aside>

    </article>
  );
}
