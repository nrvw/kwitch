import React from 'react';
import KickEmbed from './KickEmbed';
import TwitchChat from './TwitchChat';

const StreamPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Kick Stream Embed */}
      <div style={{ flex: 1 }}>
        <KickEmbed />
      </div>

      {/* Twitch Chat Embed */}
      <div style={{ width: '350px', marginLeft: '20px' }}>
        <TwitchChat />
      </div>
    </div>
  );
};

export default StreamPage;
