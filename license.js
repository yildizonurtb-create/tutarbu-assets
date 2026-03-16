(function(){

  function inject(){
    if(document.getElementById('_lb'))return;

    var s=document.createElement('style');
    s.textContent=[

      /* ── BANNER ── */
      '#_lb{width:100%;background:#080808;border-top:1px solid #1e2a3a;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;font-family:Arial,sans-serif;box-sizing:border-box;transition:background .2s}',
      '#_lb:hover{background:#111111}',

      '._lbl{display:flex;align-items:center;gap:14px;flex:1;min-width:0}',

      '._lbs{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#1b6b3a;color:#fff;font-family:"Arial Black",Arial,sans-serif;font-weight:900;font-size:15px;letter-spacing:2px;padding:8px 12px 5px;border-radius:6px;line-height:1;flex-shrink:0;min-width:64px;text-align:center}',
      '._lbs span{font-size:8px;font-weight:400;margin-top:3px;color:#a8d5b8;display:block;letter-spacing:.3px}',

      '._lbt{min-width:0;flex:1}',
      '._lbh{font-size:12.5px;font-weight:700;color:#e8e8e8;letter-spacing:.3px;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '._lbd{font-size:11px;color:#778899;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.4}',

      '._lbc{display:flex;align-items:center;gap:5px;background:none;border:1px solid #2a3a50;color:#7aabbf;font-size:11.5px;padding:7px 12px;border-radius:5px;cursor:pointer;white-space:nowrap;flex-shrink:0;font-family:Arial,sans-serif;transition:border-color .2s,color .2s;line-height:1}',
      '._lbc:hover{border-color:#4a7a9b;color:#aaccdd}',
      '._lba{font-size:13px;display:inline-block;transition:transform .2s}',
      '#_lb:hover ._lba{transform:translateX(3px)}',

      /* ── OVERLAY ── */
      '#_ov{position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.6);display:none;align-items:center;justify-content:center;padding:12px;box-sizing:border-box}',
      '#_ov.on{display:flex}',

      /* ── MODAL ── */
      '#_md{background:#eef0f3;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.45);max-width:580px;width:100%;position:relative;padding:14px 14px 12px;box-sizing:border-box;font-family:Arial,sans-serif;max-height:90vh;overflow-y:auto}',

      '#_mx{position:absolute;top:10px;right:12px;background:none;border:none;font-size:22px;color:#999;cursor:pointer;padding:2px 7px;border-radius:5px;line-height:1;transition:color .15s,background .15s;z-index:1}',
      '#_mx:hover{color:#333;background:#d8d8d8}',

      '#_cd{background:#fff;border-radius:8px;padding:32px 36px 28px;box-sizing:border-box}',

      /* logo */
      '._lr{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:22px}',
      '._lc{width:72px;height:72px;border-radius:50%;background:#1e3a5f;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
      '._lc svg{width:50px;height:50px}',
      '._ln{font-family:"Arial Black",Arial,sans-serif;font-size:36px;font-weight:900;color:#1e3a5f;letter-spacing:2px;line-height:1}',
      '._ls{font-size:12.5px;color:#1e3a5f;margin-top:3px}',

      /* content */
      '._mt{text-align:center;font-size:19px;color:#1e3a5f;font-family:Georgia,serif;font-weight:bold;margin-bottom:20px}',
      '._mb{font-size:13px;color:#333;line-height:1.8;margin-bottom:16px}',
      '._mb strong{color:#111}',
      '._mst{font-size:13px;color:#333;margin-bottom:22px}',
      '._pill{display:inline-block;background:#d1f0dc;color:#1a6b2e;border:1px solid #8fcca8;font-size:11.5px;font-weight:bold;padding:2px 11px;border-radius:20px;margin-left:6px;vertical-align:middle}',

      /* seal */
      '._sc{text-align:center}',
      '._ms{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;background:#1b6b3a;color:#fff;font-family:"Arial Black",Arial,sans-serif;font-weight:900;font-size:22px;letter-spacing:2px;padding:11px 22px 8px;border-radius:7px;line-height:1;min-width:90px}',
      '._ms span{font-size:10px;font-weight:400;letter-spacing:.5px;margin-top:4px;color:#a8d5b8}',

      /* modal footer */
      '#_mf{text-align:center;margin-top:11px;font-size:11px;color:#aaa;padding-bottom:2px}',
      '#_mf a{color:#1e3a5f;text-decoration:none;margin:0 4px}',
      '#_mf a:hover{text-decoration:underline}',

      /* ── MOBILE ≤ 600px ── */
      '@media(max-width:600px){',
        /* banner */
        '#_lb{padding:12px 14px;gap:10px}',
        '._lbs{font-size:13px;padding:7px 10px 4px;min-width:54px}',
        '._lbh{font-size:11.5px}',
        '._lbd{display:none}',
        '._lbc{font-size:11px;padding:6px 10px}',

        /* modal */
        '#_md{padding:10px 10px 10px;border-radius:10px}',
        '#_cd{padding:22px 18px 20px}',

        /* logo */
        '._lr{gap:12px;margin-bottom:18px}',
        '._lc{width:58px;height:58px}',
        '._lc svg{width:40px;height:40px}',
        '._ln{font-size:28px}',
        '._ls{font-size:11.5px}',

        /* content */
        '._mt{font-size:16px;margin-bottom:16px}',
        '._mb{font-size:12.5px;line-height:1.75}',
        '._mst{font-size:12.5px;margin-bottom:18px}',
        '._pill{font-size:11px;padding:2px 9px}',

        /* seal */
        '._ms{font-size:18px;padding:10px 18px 7px;min-width:76px}',
        '._ms span{font-size:9px}',

        '#_mf{font-size:10.5px}',
      '}',

      /* ── SMALL MOBILE ≤ 380px ── */
      '@media(max-width:380px){',
        '#_lb{flex-wrap:wrap}',
        '._lbc{width:100%;justify-content:center;margin-top:4px}',
        '._ln{font-size:24px}',
        '._mt{font-size:15px}',
        '._mb,._mst{font-size:12px}',
      '}'

    ].join('');
    document.head.appendChild(s);

    /* SVG */
    var svg='<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="29" fill="none" stroke="#fff" stroke-width="1.5"/><text x="32" y="47" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-style="italic" font-weight="bold" fill="#fff">G</text><text x="13" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-style="italic" font-weight="bold" fill="#fff">C</text><text x="51" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-style="italic" font-weight="bold" fill="#fff">A</text></svg>';

    /* BANNER */
    var bn=document.createElement('div');
    bn.id='_lb';
    bn.innerHTML=
      '<div class="_lbl">'
        +'<div class="_lbs">CGA<span>cert.cga.cw</span></div>'
        +'<div class="_lbt">'
          +'<div class="_lbh">Lisansl\u0131 ve G\u00fcvenli Platform</div>'
          +'<div class="_lbd">tutarbu.com \u2022 50 Gold B.V. \u2022 Cura\u00e7ao Gaming Authority \u2022 \u015eirket No: 163883</div>'
        +'</div>'
      +'</div>'
      +'<button class="_lbc">Lisans\u0131 G\u00f6r\u00fcnt\u00fcle <span class="_lba">\u2192</span></button>';

    /* OVERLAY */
    var ov=document.createElement('div');
    ov.id='_ov';
    ov.innerHTML=
      '<div id="_md">'
        +'<button id="_mx">&times;</button>'
        +'<div id="_cd">'
          +'<div class="_lr">'
            +'<div class="_lc">'+svg+'</div>'
            +'<div>'
              +'<div class="_ln">CGA</div>'
              +'<div class="_ls">Cura\u00e7ao Gaming Authority</div>'
            +'</div>'
          +'</div>'
          +'<div class="_mt">Certificate of Operation</div>'
          +'<div class="_mb">This is to certify that <strong>tutarbu.com</strong> is operated by <strong>50 Gold B.V.</strong>, a company incorporated under the laws of Cura\u00e7ao with Company Number <strong>163883</strong> and licensed by the Cura\u00e7ao Gaming Authority to offer games of chance in accordance with the National Ordinance on Offshore Games of Hazard (Landsverordening buitengaatse hazardspelen, P.B. 1993, no. 63) (NOOGH).</div>'
          +'<div class="_mst">The license is valid and its current status is <span class="_pill">Active</span></div>'
          +'<div class="_sc"><div class="_ms">CGA<span>cert.cga.cw</span></div></div>'
        +'</div>'
        +'<div id="_mf">Copyright 2025 Cura\u00e7ao Gaming Authority &bull; <a href="https://cert.cga.cw" target="_blank" rel="noopener">Terms</a> &bull; <a href="https://cert.cga.cw" target="_blank" rel="noopener">Privacy Policy</a></div>'
      +'</div>';

    /* Hedefe ekle */
    var target=
      document.querySelector('.footerContainer')||
      document.querySelector('.footerWrapper')||
      document.querySelector('.layout-footer-holder-bc')||
      document.querySelector('footer')||
      document.body;
    target.appendChild(bn);
    document.body.appendChild(ov);

    /* OPEN / CLOSE */
    function open(){ov.classList.add('on');document.body.style.overflow='hidden';}
    function close(){ov.classList.remove('on');document.body.style.overflow='';}
    bn.addEventListener('click',open);
    document.getElementById('_mx').addEventListener('click',function(e){e.stopPropagation();close();});
    ov.addEventListener('click',function(e){if(e.target===ov)close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  }

  /* BetConstruct dinamik yükleme — footer hazır olana kadar bekle */
  function waitAndInject(){
    var el=
      document.querySelector('.footerContainer')||
      document.querySelector('.footerWrapper')||
      document.querySelector('.layout-footer-holder-bc');
    if(el){inject();return;}

    var obs=new MutationObserver(function(){
      var found=
        document.querySelector('.footerContainer')||
        document.querySelector('.footerWrapper')||
        document.querySelector('.layout-footer-holder-bc');
      if(found){obs.disconnect();inject();}
    });
    obs.observe(document.body,{childList:true,subtree:true});
    setTimeout(function(){obs.disconnect();inject();},10000);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',waitAndInject);
  } else {
    waitAndInject();
  }

})();
