import React from 'react';
import SandButton from '../Button/Button';
import SandInput from '../Input/Input';
import SandIcon from '../Icon/Icon';
import SandLink from '../Link/Link';

export default {
  title: '05. Templates/AuthLayout',
  parameters: { layout: 'fullscreen' },
};

export const Active = {
  name: 'AuthLayout Active',
  render: () => (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--theme-bg)',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        width: '100%', maxWidth: '400px', padding: '40px',
        background: 'var(--theme-surface)', borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" type="email" autoFocus />
          <SandInput label="Password" placeholder="Enter your password" type="password" />
          <SandButton variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
            <SandIcon name="login" size={16} /> Sign In
          </SandButton>
        </div>
      </div>
    </div>
  )
};

export const Disabled = {
  name: 'AuthLayout Disabled',
  render: () => (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--theme-bg)',
      fontFamily: 'Inter, sans-serif',
      opacity: 0.5, pointerEvents: 'none',
    }}>
      <div style={{
        width: '100%', maxWidth: '400px', padding: '40px',
        background: 'var(--theme-surface)', borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" type="email" disabled />
          <SandInput label="Password" placeholder="Enter your password" type="password" disabled />
          <SandButton variant="primary" style={{ width: '100%', justifyContent: 'center' }} disabled>
            <SandIcon name="login" size={16} /> Sign In
          </SandButton>
        </div>
      </div>
    </div>
  )
};

export const Default = {
  name: 'AuthLayout',
  render: () => (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--theme-bg)',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        width: '100%', maxWidth: '400px', padding: '40px',
        background: 'var(--theme-surface)', borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <SandIcon name="lock" size={36} style={{ color: 'var(--sandui-accent)', marginBottom: '12px' }} />
          <h1 style={{ fontSize: '24px', fontFamily: 'Outfit, sans-serif', color: 'var(--theme-text)', margin: '0 0 4px' }}>
            Welcome Back
          </h1>
          <p style={{ color: 'var(--theme-text-muted)', fontSize: '14px', margin: 0 }}>
            Sign in to your SandurTech account
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" type="email" />
          <SandInput label="Password" placeholder="Enter your password" type="password" />
          <SandButton variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
            <SandIcon name="login" size={16} /> Sign In
          </SandButton>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <SandLink href="#" variant="muted">Forgot password?</SandLink>
        </div>
      </div>
    </div>
  ),
};
