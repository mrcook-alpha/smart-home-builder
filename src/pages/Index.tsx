import { ArrowRight, Zap, Home, BarChart3, Lock, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <nav className='border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center'>
              <Home className='w-5 h-5 text-primary-foreground' />
            </div>
            <span className='text-xl font-bold text-foreground'>Smart Home Builder</span>
          </div>
          <div className='flex items-center gap-6'>
            <a href='#features' className='text-sm text-muted-foreground hover:text-foreground transition'>Features</a>
            <a href='#automation' className='text-sm text-muted-foreground hover:text-foreground transition'>Automation</a>
            <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative overflow-hidden py-20 md:py-32'>
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl'></div>
        </div>
        
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center max-w-3xl mx-auto'>
            <div className='inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full'>
              <p className='text-sm font-semibold text-primary'>Luxury Home Automation</p>
            </div>
            
            <h1 className='text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight'>
              Your Home, <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Perfectly Automated</span>
            </h1>
            
            <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
              Control everything with Amazon. One platform to automate lighting, climate, security, and entertainment across your entire property.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' className='bg-primary text-primary-foreground hover:bg-primary/90 group'>
                Start Free Trial <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition' />
              </Button>
              <Button size='lg' variant='outline' className='border-border hover:bg-secondary/10'>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id='features' className='py-20 bg-secondary/5 border-y border-border'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>Enterprise-Grade Features</h2>
            <p className='text-lg text-muted-foreground'>Everything you need to manage a luxury smart home</p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition group'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition'>
                <Zap className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>Instant Automation</h3>
              <p className='text-muted-foreground'>Create sophisticated scenes and routines. Control everything with voice, app, or preset schedules.</p>
            </div>

            {/* Feature 2 */}
            <div className='p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition group'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition'>
                <Lock className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>Military-Grade Security</h3>
              <p className='text-muted-foreground'>End-to-end encryption. Multi-layer authentication. Your home data stays completely private.</p>
            </div>

            {/* Feature 3 */}
            <div className='p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition group'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition'>
                <BarChart3 className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>Energy Analytics</h3>
              <p className='text-muted-foreground'>Monitor consumption in real-time. Optimize usage patterns. Reduce energy costs significantly.</p>
            </div>

            {/* Feature 4 */}
            <div className='p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition group'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition'>
                <Smartphone className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>Universal Control</h3>
              <p className='text-muted-foreground'>One app to rule them all. Control 500+ device types from anywhere in the world.</p>
            </div>

            {/* Feature 5 */}
            <div className='p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition group'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition'>
                <Home className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>Multi-Property</h3>
              <p className='text-muted-foreground'>Manage multiple villas, apartments, or compounds from a single dashboard.</p>
            </div>

            {/* Feature 6 */}
            <div className='p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition group'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition'>
                <ArrowRight className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>Amazon Integration</h3>
              <p className='text-muted-foreground'>Seamlessly connect with Alexa ecosystem. Native support for all Amazon smart home devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id='automation' className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-foreground mb-6'>Automation That Works Like Magic</h2>
              <p className='text-lg text-muted-foreground mb-8'>
                Set up complex automations in minutes, not hours. Our AI learns your patterns and suggests optimizations.
              </p>
              
              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <div className='w-2 h-2 rounded-full bg-primary'></div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground'>Smart Scenes</h4>
                    <p className='text-sm text-muted-foreground'>Movie night, Good morning, Leaving home—all one tap</p>
                  </div>
                </div>
                
                <div className='flex gap-4'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <div className='w-2 h-2 rounded-full bg-primary'></div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground'>Geofencing</h4>
                    <p className='text-sm text-muted-foreground'>Home prepares automatically when you're near</p>
                  </div>
                </div>
                
                <div className='flex gap-4'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <div className='w-2 h-2 rounded-full bg-primary'></div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground'>Conditional Logic</h4>
                    <p className='text-sm text-muted-foreground'>If this, then that—build unlimited scenarios</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 h-96 flex items-center justify-center'>
              <div className='text-center'>
                <Zap className='w-16 h-16 text-primary mx-auto mb-4 opacity-50' />
                <p className='text-muted-foreground'>Automation Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className='py-20 bg-secondary/5 border-y border-border'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-foreground mb-4'>Built for Premium Living</h2>
            <p className='text-lg text-muted-foreground'>Trusted by luxury properties across the GCC</p>
          </div>
          
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>5,000+</div>
              <p className='text-muted-foreground'>Smart Homes Automated</p>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>99.9%</div>
              <p className='text-muted-foreground'>Uptime SLA</p>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>24/7</div>
              <p className='text-muted-foreground'>Premium Support</p>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>500+</div>
              <p className='text-muted-foreground'>Compatible Devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-5xl font-bold text-foreground mb-6'>Ready to Transform Your Home?</h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Join thousands of property owners enjoying the future of home automation.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='bg-primary text-primary-foreground hover:bg-primary/90 group'>
              Start 30-Day Free Trial <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition' />
            </Button>
            <Button size='lg' variant='outline' className='border-border hover:bg-secondary/10'>
              Schedule Demo
            </Button>
          </div>
          
          <p className='text-sm text-muted-foreground mt-8'>No credit card required. Full access to all features.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border py-12 bg-secondary/5'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center'>
                  <Home className='w-4 h-4 text-primary-foreground' />
                </div>
                <span className='font-bold text-foreground'>Smart Home Builder</span>
              </div>
              <p className='text-sm text-muted-foreground'>Luxury home automation for the modern Arab elite.</p>
            </div>
            
            <div>
              <h4 className='font-semibold text-foreground mb-4'>Product</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li><a href='#' className='hover:text-foreground transition'>Features</a></li>
                <li><a href='#' className='hover:text-foreground transition'>Pricing</a></li>
                <li><a href='#' className='hover:text-foreground transition'>Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className='font-semibold text-foreground mb-4'>Company</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li><a href='#' className='hover:text-foreground transition'>About</a></li>
                <li><a href='#' className='hover:text-foreground transition'>Blog</a></li>
                <li><a href='#' className='hover:text-foreground transition'>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className='font-semibold text-foreground mb-4'>Legal</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li><a href='#' className='hover:text-foreground transition'>Privacy</a></li>
                <li><a href='#' className='hover:text-foreground transition'>Terms</a></li>
                <li><a href='#' className='hover:text-foreground transition'>Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className='border-t border-border pt-8 flex items-center justify-between'>
            <p className='text-sm text-muted-foreground'>&copy; 2026 Smart Home Builder. All rights reserved.</p>
            <div className='flex gap-4'>
              <a href='#' className='text-muted-foreground hover:text-foreground transition'>Twitter</a>
              <a href='#' className='text-muted-foreground hover:text-foreground transition'>LinkedIn</a>
              <a href='#' className='text-muted-foreground hover:text-foreground transition'>Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
