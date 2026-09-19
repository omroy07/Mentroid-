/**
 * Mentroid — Authentication UI Controller
 * ========================================
 * Manages the interactive Sign In / Register modal, real-time password strength meter,
 * navigation user state, quick demo logins, and toast notifications.
 */
(function () {
  'use strict';

  function initAuthUI() {
    var modal = document.getElementById('auth-modal');
    var closeBtn = document.getElementById('auth-modal-close-btn');
    var tabLoginBtn = document.getElementById('tab-login-btn');
    var tabRegBtn = document.getElementById('tab-register-btn');
    var formLogin = document.getElementById('form-login');
    var formRegister = document.getElementById('form-register');
    var toast = document.getElementById('auth-toast');

    // Demo chip buttons
    var demoClientBtn = document.getElementById('demo-chip-client');
    var demoAdminBtn = document.getElementById('demo-chip-admin');

    // Password strength elements
    var regPasswordInput = document.getElementById('reg-password');
    var strengthFill = document.getElementById('strength-bar-fill');
    var ruleLen = document.getElementById('rule-len');
    var ruleCase = document.getElementById('rule-case');
    var ruleNum = document.getElementById('rule-num');
    var ruleSym = document.getElementById('rule-sym');

    /* ── Toast Notification Helper ── */
    function showToast(msg, type) {
      if (!toast) return;
      toast.textContent = msg;
      toast.className = 'auth-toast show ' + (type || 'info');
      clearTimeout(toast._timer);
      toast._timer = setTimeout(function () {
        toast.className = 'auth-toast';
      }, 3500);
    }

    /* ── Modal Controls ── */
    function openModal(tab) {
      if (!modal) return;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      switchTab(tab || 'login');
      clearMessages();
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      clearMessages();
    }

    function switchTab(tab) {
      if (!tabLoginBtn || !tabRegBtn || !formLogin || !formRegister) return;
      if (tab === 'register') {
        tabRegBtn.classList.add('active');
        tabLoginBtn.classList.remove('active');
        formRegister.style.display = 'block';
        formLogin.style.display = 'none';
      } else {
        tabLoginBtn.classList.add('active');
        tabRegBtn.classList.remove('active');
        formLogin.style.display = 'block';
        formRegister.style.display = 'none';
      }
      clearMessages();
    }

    function clearMessages() {
      var loginErr = document.getElementById('login-error-msg');
      var regErr = document.getElementById('reg-error-msg');
      var regSuccess = document.getElementById('reg-success-msg');
      if (loginErr) loginErr.style.display = 'none';
      if (regErr) regErr.style.display = 'none';
      if (regSuccess) regSuccess.style.display = 'none';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeModal();
      }
    });

    if (tabLoginBtn) tabLoginBtn.addEventListener('click', function () { switchTab('login'); });
    if (tabRegBtn) tabRegBtn.addEventListener('click', function () { switchTab('register'); });

    /* ── Password Visibility Toggle ── */
    document.querySelectorAll('.toggle-password-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-target');
        var input = document.getElementById(targetId);
        if (!input) return;
        var isPass = input.type === 'password';
        input.type = isPass ? 'text' : 'password';
        btn.textContent = isPass ? '🙈' : '👁️';
      });
    });

    /* ── Demo Credentials Quick-Fill ── */
    if (demoClientBtn) {
      demoClientBtn.addEventListener('click', function () {
        switchTab('login');
        var emailInput = document.getElementById('login-email');
        var passInput = document.getElementById('login-password');
        if (emailInput) emailInput.value = 'client@mentroid.co.in';
        if (passInput) passInput.value = 'Client@Mentroid2026!';
        showToast('Client demo credentials loaded.', 'info');
      });
    }

    if (demoAdminBtn) {
      demoAdminBtn.addEventListener('click', function () {
        switchTab('login');
        var emailInput = document.getElementById('login-email');
        var passInput = document.getElementById('login-password');
        if (emailInput) emailInput.value = 'admin@mentroid.co.in';
        if (passInput) passInput.value = 'Admin@Mentroid2026!';
        showToast('Admin demo credentials loaded.', 'info');
      });
    }

    /* ── Live Password Strength Meter ── */
    if (regPasswordInput && strengthFill) {
      regPasswordInput.addEventListener('input', function () {
        var val = regPasswordInput.value || '';
        var hasLen = val.length >= 8;
        var hasCase = /[A-Z]/.test(val) && /[a-z]/.test(val);
        var hasNum = /[0-9]/.test(val);
        var hasSym = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/.test(val);

        if (ruleLen) ruleLen.className = hasLen ? 'valid' : '';
        if (ruleCase) ruleCase.className = hasCase ? 'valid' : '';
        if (ruleNum) ruleNum.className = hasNum ? 'valid' : '';
        if (ruleSym) ruleSym.className = hasSym ? 'valid' : '';

        var score = (hasLen ? 1 : 0) + (hasCase ? 1 : 0) + (hasNum ? 1 : 0) + (hasSym ? 1 : 0);
        var percent = (score / 4) * 100;
        strengthFill.style.width = percent + '%';

        if (percent <= 25) {
          strengthFill.style.background = '#ef4444'; // Red
        } else if (percent <= 50) {
          strengthFill.style.background = '#f59e0b'; // Amber
        } else if (percent <= 75) {
          strengthFill.style.background = '#3b82f6'; // Blue
        } else {
          strengthFill.style.background = '#10b981'; // Emerald
        }
      });
    }

    /* ── Navigation User State ── */
    function updateNavState() {
      var userAreas = [
        document.getElementById('nav-user-area'),
        document.getElementById('drawer-user-area'),
      ];

      var user = window.MentroidAuth ? window.MentroidAuth.getCurrentUser() : null;

      userAreas.forEach(function (el) {
        if (!el) return;
        el.innerHTML = '';

        if (user) {
          var roleClass = user.role === 'admin' ? 'role-badge-admin' : 'role-badge-client';
          var roleLabel = user.role.toUpperCase();

          var wrap = document.createElement('div');
          wrap.className = 'auth-nav-logged-in';
          wrap.innerHTML =
            '<a href="portal.html" class="nav-portal-link" title="Open Protected Workspace">' +
              '<span class="user-role-badge ' + roleClass + '">' + roleLabel + '</span> ' +
              '<span class="user-display-name">' + (user.name || user.email) + '</span>' +
            '</a>' +
            '<button type="button" class="btn-nav-signout" title="Sign out of session">Sign Out</button>';

          var signOutBtn = wrap.querySelector('.btn-nav-signout');
          signOutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.MentroidAuth) {
              window.MentroidAuth.logout();
              updateNavState();
              showToast('Signed out successfully.', 'info');
              // If on portal page, notify the route guard
              if (window.location.pathname.endsWith('portal.html')) {
                window.location.reload();
              }
            }
          });

          el.appendChild(wrap);
        } else {
          var signInBtn = document.createElement('button');
          signInBtn.type = 'button';
          signInBtn.className = 'nav-signin-btn';
          signInBtn.textContent = 'Sign In / Portal';
          signInBtn.addEventListener('click', function () {
            openModal('login');
          });
          el.appendChild(signInBtn);
        }
      });
    }

    /* ── Form Submissions ── */
    if (formLogin) {
      formLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = (document.getElementById('login-email').value || '').trim();
        var password = document.getElementById('login-password').value || '';
        var errBox = document.getElementById('login-error-msg');

        if (!window.MentroidAuth) return;
        var res = window.MentroidAuth.login(email, password);

        if (res.status === 200) {
          showToast('Welcome back, ' + res.data.user.name + '!', 'success');
          closeModal();
          updateNavState();
          if (window.location.pathname.endsWith('portal.html')) {
            window.location.reload();
          }
        } else {
          if (errBox) {
            errBox.textContent = res.error || 'Authentication failed (HTTP ' + res.status + ')';
            errBox.style.display = 'block';
          }
        }
      });
    }

    if (formRegister) {
      formRegister.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (document.getElementById('reg-name').value || '').trim();
        var email = (document.getElementById('reg-email').value || '').trim();
        var password = document.getElementById('reg-password').value || '';
        var errBox = document.getElementById('reg-error-msg');
        var succBox = document.getElementById('reg-success-msg');

        if (!window.MentroidAuth) return;
        var regRes = window.MentroidAuth.register({ name: name, email: email, password: password });

        if (regRes.status === 201) {
          if (succBox) {
            succBox.textContent = 'Account created successfully! Signing in…';
            succBox.style.display = 'block';
          }
          if (errBox) errBox.style.display = 'none';

          // Auto login after registration
          setTimeout(function () {
            window.MentroidAuth.login(email, password);
            showToast('Account created and verified! Welcome, ' + name, 'success');
            closeModal();
            updateNavState();
            if (window.location.pathname.endsWith('portal.html')) {
              window.location.reload();
            }
          }, 800);
        } else {
          if (errBox) {
            errBox.textContent = regRes.error || 'Registration failed (HTTP ' + regRes.status + ')';
            errBox.style.display = 'block';
          }
          if (succBox) succBox.style.display = 'none';
        }
      });
    }

    // Trigger on external buttons
    document.querySelectorAll('.open-auth-trigger, #btn-open-auth-modal').forEach(function (btn) {
      btn.addEventListener('click', function () { openModal('login'); });
    });

    updateNavState();

    // Export UI API
    window.MentroidAuthUI = {
      openModal: openModal,
      closeModal: closeModal,
      updateNavState: updateNavState,
      showToast: showToast,
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthUI);
  } else {
    initAuthUI();
  }
})();
