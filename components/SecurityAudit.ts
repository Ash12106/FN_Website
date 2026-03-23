/**
 * Security Audit & Monitoring
 * Track and log security events
 */

export interface SecurityEvent {
  timestamp: Date;
  type: 'warning' | 'danger' | 'info' | 'success';
  message: string;
  details?: Record<string, any>;
}

class SecurityAudit {
  private events: SecurityEvent[] = [];
  private maxEvents = 100;

  /**
   * Log a security event
   */
  public log(
    type: 'warning' | 'danger' | 'info' | 'success',
    message: string,
    details?: Record<string, any>
  ): void {
    const event: SecurityEvent = {
      timestamp: new Date(),
      type,
      message,
      details,
    };

    this.events.push(event);

    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      const icon = {
        warning: '⚠️',
        danger: '🚨',
        info: 'ℹ️',
        success: '✅',
      }[type];

      console.log(`${icon} [Security] ${message}`, details || '');
    }

    // Store in localStorage for monitoring
    this.persistEvents();
  }

  /**
   * Get all logged events
   */
  public getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  /**
   * Clear all events
   */
  public clearEvents(): void {
    this.events = [];
    localStorage.removeItem('security_audit_log');
  }

  /**
   * Get events of a specific type
   */
  public getEventsByType(type: string): SecurityEvent[] {
    return this.events.filter(e => e.type === type);
  }

  /**
   * Get events from the last N hours
   */
  public getRecentEvents(hours: number = 24): SecurityEvent[] {
    const cutoffTime = new Date(Date.now() - hours * 60 * 60 * 1000);
    return this.events.filter(e => e.timestamp > cutoffTime);
  }

  /**
   * Persist events to localStorage
   */
  private persistEvents(): void {
    try {
      localStorage.setItem(
        'security_audit_log',
        JSON.stringify(this.events.slice(-50)) // Keep only last 50 for storage
      );
    } catch (e) {
      // Storage limit exceeded, ignore
    }
  }

  /**
   * Load persisted events from localStorage
   */
  public loadPersistedEvents(): void {
    try {
      const stored = localStorage.getItem('security_audit_log');
      if (stored) {
        this.events = JSON.parse(stored);
      }
    } catch (e) {
      // Parsing error, ignore
    }
  }

  /**
   * Get security score (0-100)
   */
  public getSecurityScore(): number {
    const dangerEvents = this.getEventsByType('danger').length;
    const warningEvents = this.getEventsByType('warning').length;

    // Each danger event: -10 points, each warning: -5 points
    let score = 100 - (dangerEvents * 10 + warningEvents * 5);

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Generate security report
   */
  public generateReport(): string {
    const totalEvents = this.events.length;
    const dangerEvents = this.getEventsByType('danger').length;
    const warningEvents = this.getEventsByType('warning').length;
    const infoEvents = this.getEventsByType('info').length;
    const successEvents = this.getEventsByType('success').length;
    const score = this.getSecurityScore();

    return `
📊 SECURITY AUDIT REPORT
========================

Score: ${score}/100 ${score >= 80 ? '✅' : score >= 60 ? '⚠️' : '🚨'}

Events Summary:
- Total Events: ${totalEvents}
- 🚨 Danger Events: ${dangerEvents}
- ⚠️ Warning Events: ${warningEvents}
- ℹ️ Info Events: ${infoEvents}
- ✅ Success Events: ${successEvents}

Recent Events (Last 10):
${this.events
  .slice(-10)
  .reverse()
  .map(
    e =>
      `${e.timestamp.toLocaleTimeString()} - [${e.type.toUpperCase()}] ${e.message}`
  )
  .join('\n')}

========================
Generated: ${new Date().toLocaleString()}
    `;
  }
}

// Create singleton instance
export const securityAudit = new SecurityAudit();

// Initialize on app load
if (typeof window !== 'undefined') {
  // Load persisted events
  securityAudit.loadPersistedEvents();

  // Log initialization
  securityAudit.log('success', 'Security Audit System Initialized');
}

export default securityAudit;
