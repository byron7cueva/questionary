import React from 'react';

interface SettingsAppProps {
  urlServer: string;
  onChangeSettings: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SettingsApp: React.FC<SettingsAppProps> = (props: SettingsAppProps): JSX.Element => (
  <div>
      <input
        type="text"
        placeholder="Url Server"
        value={props.urlServer}
        onChange={props.onChangeSettings}
      />
  </div>
);