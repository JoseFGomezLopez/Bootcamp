const AlarmasHeader = ({ callback }) => {
  return (
    <div className="headerUtils">
      <a href="mailto:a@a.com">
        <img
          src="/public/LogoHeader/envelope/Vector (2).png"
          alt="correo"
          className="envelope"
        />
      </a>
      <div className="alarmVectors">
        <img
          src="/public/LogoHeader/bell/Vector.png"
          alt="alarma de avisos"
          className="bell"
        />
        <img
          src="/public/LogoHeader/bell/Ellipse 4.png"
          alt="alarma de avisos"
          className="ellipseBell"
        />
      </div>
      <button className="userAvatar" onClick={callback}>
        <img
          src="/public/LogoHeader/avatar/Vector.png"
          alt="alarma de avisos"
          className="avatar"
        />
        <img
          src="/public/LogoHeader/avatar/Ellipse 1.png"
          alt="alarma de avisos"
          className="ellipse"
        />
      </button>
    </div>
  );
};

export default AlarmasHeader;
