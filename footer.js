document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('shared-footer');
  if (!el) return;
  el.innerHTML =
    '<footer class="footer">' +
      '<div class="wrap" style="display:flex; flex-direction:column; align-items:center; gap:10px;">' +
        '<div class="footer-logos" style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:18px; margin-bottom:2px;">' +
          '<img src="./icons/huawei.png" alt="Huawei" style="height:32px; border-radius:8px; border:1px solid var(--stroke); background:#fff; padding:2px 4px;">' +
          '<img src="./icons/linkerbot.png" alt="Linkerbot" style="height:32px; border-radius:8px; border:1px solid var(--stroke); background:#fff; padding:2px 4px;">' +
          '<img src="./icons/paxini.png" alt="Paxini" style="height:32px; border-radius:8px; border:1px solid var(--stroke); background:#fff; padding:2px 4px;">' +
          '<img src="./icons/roboticsX.png" alt="RoboticsX" style="height:32px; border-radius:8px; border:1px solid var(--stroke); background:#fff; padding:2px 4px;">' +
          '<img src="./icons/tianji.png" alt="Tianji" style="height:32px; border-radius:8px; border:1px solid var(--stroke); background:#fff; padding:2px 4px;">' +
          '<img src="./icons/topstar.png" alt="Topstar" style="height:32px; border-radius:8px; border:1px solid var(--stroke); background:#fff; padding:2px 4px;">' +
        '</div>' +
        '<div class="fine" style="text-align:center; margin-top:-2px; margin-bottom:4px;">In collaboration with our industry and academic partners.</div>' +
        '<div class="footer-grid" style="width:100%; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:10px;">' +
          '<div>' +
            '<div>&copy; ' + new Date().getFullYear() + ' EMAIL Robotics Lab. All rights reserved.</div>' +
            '<div class="fine">Crafted with Codex and Claude Code assistance.</div>' +
          '</div>' +
          '<div class="fine">Embodied MAnipulation InteLligence (EMAIL) Robotics Lab.</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
});
