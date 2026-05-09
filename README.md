<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verified</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    body {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: white;
      padding: 20px;
    }

    .container {
      width: 100%;
      max-width: 420px;
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 40px 32px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    }

    .success-icon {
      width: 90px;
      height: 90px;
      margin: 0 auto 24px;
      border-radius: 50%;
      background: rgba(34, 197, 94, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pop 0.5s ease;
    }

    .checkmark {
      font-size: 42px;
      color: #22c55e;
    }

    h1 {
      font-size: 30px;
      margin-bottom: 14px;
      font-weight: 700;
    }

    p {
      color: #cbd5e1;
      line-height: 1.6;
      font-size: 15px;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      text-decoration: none;
      background: white;
      color: #0f172a;
      padding: 14px 24px;
      border-radius: 14px;
      font-weight: 600;
      transition: 0.25s ease;
    }

    .button:hover {
      transform: translateY(-2px);
      opacity: 0.92;
    }

    .footer {
      margin-top: 24px;
      font-size: 13px;
      color: #94a3b8;
    }

    @keyframes pop {
      0% {
        transform: scale(0.6);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 32px 24px;
      }

      h1 {
        font-size: 26px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    
    <div class="success-icon">
      <div class="checkmark">✓</div>
    </div>

    <h1>Email Verified</h1>

    <p>
      Thank you for verifying your email address.  
      Your account has been successfully activated and is now ready to use.
    </p>

    <a href="#" class="button">
      Continue
    </a>

    <div class="footer">
      You may now return to the app.
    </div>

  </div>
</body>
</html>
