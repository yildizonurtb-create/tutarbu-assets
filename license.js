(function () {
  var s = document.createElement('style');
  s.textContent = [
    '#_lb{width:100%;background:#0f1520;border-top:1px solid #1e2a3a;padding:18px 32px;display:flex;align-items:center;justify-content:space-between;gap:20px;cursor:pointer;font-family:Arial,sans-serif;box-sizing:border-box;transition:background .2s}',
    '#_lb:hover{background:#141c2e}',
    '._lbl{display:flex;align-items:center;gap:16px;flex:1;min-width:0}',
    '._lbs{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#1b6b3a;color:#fff;font-family:"Arial Black",Arial,sans-serif;font-weight:900;font-size:16px;letter-spacing:2px;padding:8px 14px 5px;border-radius:6px;line-height:1;flex-shrink:0;min-width:70px}',
    '._lbs span{font-size:8px;font-weight:400;letter-spacing:.4px;margin-top:3px;color:#a8d5b8;display:block}',
    '._lbt{min-width:0}',
    '._lbh{font-size:13px;font-weight:700;color:#e8e8e8;letter-spacing:.3px;margin-bottom:3px}',
    '._lbd{font-size:11.5px;color:#778899;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '._lbc{display:flex;align-items:center;gap:6px;background:none;border:1px solid #2a3a50;color:#7aabbf;font-size:12px;padding:7px 14px;border-radius:5px;cursor:pointer;white-space:nowrap;flex-shrink:0;font-family:Arial,sans-serif;transition:border-color .2s,color .2s}',
    '._lbc:hover{border-color:#4a7a9b;color:#aaccdd}',
    '._lba{font-size:14px;display:inline-block;transition:transform .2s}',
    '#_lb:hover ._lba{transform:translateX(3px)}',
    '#_ov{position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;padding:16px;box-sizing:border-box}',
    '#_ov.on{display:flex;animation:_lf .18s ease}',
    '@keyframes _lf{from{opacity:0}to{opacity:1}}',
    '#_md{background:#eef0f3;border-radius:12px;box-shadow:0 24px 80px rgba(0,0,0,.45);max-width:620px;width:100%;position:relative;padding:16px 16px 14px;box-sizing:border-box;animation:_lu .26s cubic-bezier(.22,.68,0,1.15);font-family:Arial,sans-serif}',
    '@keyframes _lu{from{opacity:0;transform:translateY(28px) scale(.97)}to{opacity:1;transform:none}}',
    '#_mx{position:absolute;top:10px;right:14px;background:none;border:none;font-size:24px;color:#999;cursor:pointer;padding:2px 7px;border-radius:5px;line-height:1;transition:color .15s,background .15s}',
    '#_mx:hover{color:#333;background:#d8d8d8}',
    '#_cd{background:#fff;border-radius:8px;padding:38px 44px 30px;box-sizing:border-box}',
    '._lr{display:flex;align-items:center;justify-content:center;gap:18px;margin-bottom:26px}',
    '._lc{width:80px;height:80px;border-radius:50%;background:#1e3a5f;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
    '._lc svg{width:56px;height:56px}',
    '._ln{font-family:"Arial Black",Arial,sans-serif;font-size:40px;font-weight:900;color:#1e3a5f;letter-spacing:2px;line-height:1}',
    '._ls{font-size:13px;color:#1e3a5f;margin-top:3px}',
    '._mt{text-align:center;font-size:20px;color:#1e3a5f;font-family:Georgia,serif;font-weight:bold;margin-bottom:22px}',
    '._mb{font-size:13.5px;color:#333;line-height:1.8;margin-bottom:18px}',
    '._mb strong{color:#111}',
    '._mst{font-size:13.5px;color:#333;margin-bottom:26px}',
    '._pill{display:inline-block;background:#d1f0dc;color:#1a6b2e;border:1px solid #8fcca8;font-size:12px;font-weight:bold;padding:2px 12px;border-radius:20px;margin-left:6px;vertical-align:middle}',
    '._sc{text-align:center}',
    '._ms{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;background:#1b6b3a;color:#fff;font-family:"Arial Black",Arial,sans-serif;font-weight:900;font-size:24px;letter-spacing:2px;padding:12px 24px 8px;border-radius:7px;line-height:1;min-width:100px}',
    '._ms span{font-size:10px;font-weight:400;letter-spacing:.5px;margin-top:4px;color:#a8d5b8}',
    '#_mf{text-align:center;margin-top:12px;font-size:11.5px;color:#aaa}',
    '#_mf a{color:#1e3a5f;text-decoration:none;margin:0 4px}',
    '#_mf a:hover{text-decoration:underline}',
    '@media(max-width:540px){',
    '#_lb{padding:14px 16px}',
    '._lbd{display:none}',
    '#_cd{padding:24px 16px 20px}',
    '._ln{font-size:28px}',
    '._lc{width:60px;height:60px}',
    '._lc svg{width:42px;height:42px}',
    '._mt{font-size:16px}',
    '._mb,._mst{font-size:12.5px}',
    '._ms{font-size:18px;padding:10px 18px 7px}',
    '}'
  ].join('');
  document.head.appendChild(s);

  var svg = '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">'
    + '<circle cx="32" cy="32" r="29" fill="none" stroke="#fff" stroke-width="1.5"/>'
    + '<text x="32" y="47" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-style="italic" font-weight="bold" fill="#fff">G</text>'
    + '<text x="13" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-style="italic" font-weight="bold" fill="#fff">C</text>'
    + '<text x="51" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-style="italic" font-weight="bold" fill="#fff">A</text>'
    + '</svg>';

  var bn = document.createElement('div');
  bn.id = '_lb';
  bn.innerHTML =
    '<div class="_lbl">'
      + '<div class="_lbs">CGA<span>cert.cga.cw</span></div>'
      + '<div class="_lbt">'
        + '<div class="_lbh">Lisansl\u0131 ve G\u00fcvenli Platform</div>'
        + '<div class="_lbd">tutarbu.com &nbsp;&bull;&nbsp; 50 Gold B.V. &nbsp;&bull;&nbsp; Cura\u00e7ao Gaming Authority &nbsp;&bull;&nbsp; \u015eirket No: 163883</div>'
      + '</div>'
    + '</div>'
    + '<button class="_lbc">Lisans\u0131 G\u00f6r\u00fcnt\u00fcle <span class="_lba">\u2192</span></button>';
  document.body.appendChild(bn);

  var ov = document.createElement('div');
  ov.id = '_ov';
  ov.innerHTML =
    '<div id="_md">'
      + '<button id="_mx">&times;</button>'
      + '<div id="_cd">'
        + '<div class="_lr">'
          + '<div class="_lc">' + svg + '</div>'
          + '<div>'
            + '<div class="_ln">CGA</div>'
            + '<div class="_ls">Cura\u00e7ao Gaming Authority</div>'
          + '</div>'
        + '</div>'
        + '<div class="_mt">Certificate of Operation</div>'
        + '<div class="_mb">'
          + 'This is to certify that <strong>tutarbu.com</strong> is operated by '
          + '<strong>50 Gold B.V.</strong>, a company incorporated under the laws of '
          + 'Cura\u00e7ao with Company Number <strong>163883</strong> and licensed by the '
          + 'Cura\u00e7ao Gaming Authority to offer games of chance in accordance with the '
          + 'National Ordinance on Offshore Games of Hazard '
          + '(Landsverordening buitengaatse hazardspelen, P.B. 1993, no. 63) (NOOGH).'
        + '</div>'
        + '<div class="_mst">The license is valid and its current status is <span class="_pill">Active</span></div>'
        + '<div class="_sc"><div class="_ms">CGA<span>cert.cga.cw</span></div></div>'
      + '</div>'
      + '<div id="_mf">'
        + 'Copyright 2025 Cura\u00e7ao Gaming Authority &nbsp;&bull;&nbsp;'
        + '<a href="https://cert.cga.cw" target="_blank" rel="noopener">Terms</a>'
        + ' &bull; '
        + '<a href="https://cert.cga.cw" target="_blank" rel="noopener">Privacy Policy</a>'
      + '</div>'
    + '</div>';
  document.body.appendChild(ov);

  function open()  { ov.classList.add('on');    document.body.style.overflow = 'hidden'; }
  function close() { ov.classList.remove('on'); document.body.style.overflow = ''; }

  bn.addEventListener('click', open);
  document.getElementById('_mx').addEventListener('click', function (e) { e.stopPropagation(); close(); });
  ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
