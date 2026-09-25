import React, { useState, useEffect } from 'react';
import './blog.css';
import { 
    ArrowLeftIcon, 
    BookOpenIcon, 
    ClockIcon, 
    CloseIcon, 
    ArrowUpRightIcon, 
    WhatsAppIcon 
} from '../common/Icons';

const blogPosts = [
    {
        id: 'multi-tenant-architecture',
        category: 'software',
        categoryLabel: 'Software & Architecture',
        title: 'Choosing a Data Isolation Strategy for Modern Multi-Tenant SaaS',
        date: 'August 9, 2026',
        readTime: '6 min read',
        thumb: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
        excerpt: 'Why I architected our SaaS platforms with a shared schema and tenant_id column instead of a database per business, and what it takes to make that bulletproof with PostgreSQL Row-Level Security.',
        content: `When architecting a business SaaS product, the very first foundational crossroad you encounter is tenant isolation.

Do you spin up a distinct PostgreSQL database for each customer? Do you allocate separate schemas inside one database cluster? Or do you adopt a shared schema with tenant discriminator keys?

### The Reality of Database-per-Tenant
On paper, a separate database for every client sounds enticing for security compliance. But in reality, operational overhead snowballs rapidly:
1. **Connection Pool Exhaustion**: 100 clients each holding 5 open connections quickly saturates server memory and database limits.
2. **Migration Nightmares**: Applying schema migrations across hundreds of independent databases requires orchestration scripts, failure rollbacks, and distributed maintenance windows.
3. **Infrastructure Cost**: Scaling resources for idle clients leads to wasted compute.

### The Solution: Shared Schema + Row-Level Security (RLS)
By leveraging PostgreSQL Row-Level Security, we can enforce isolation at the kernel level rather than relying solely on application-layer \`WHERE tenant_id = ?\` queries.

\`\`\`sql
-- Enable RLS on the table
ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;

-- Create policy checking current authenticated tenant context
CREATE POLICY tenant_isolation_policy ON workspaces
    USING (tenant_id = current_setting('app.current_tenant_id')::uuid);
\`\`\`

### Enforcing Context in Next.js & Node.js Middleware
Before any query executes, our connection wrapper extracts the authenticated session from the JWT and issues a localized transaction setting:
\`\`\`typescript
await db.query("SET LOCAL app.current_tenant_id = $1", [session.tenantId]);
\`\`\`

Even if an engineer accidentally forgets a tenant filter in an ORM query, PostgreSQL will strictly refuse to return records belonging to another workspace. This yields the operational speed of single-schema hosting with the security guarantees of enterprise isolation.`
    },
    {
        id: 'applied-physics-bug-hunting',
        category: 'physics',
        categoryLabel: 'Applied Physics',
        title: 'Deconstructing Complex Chaos: What Applied Physics Taught Me About Bug Hunting',
        date: 'July 18, 2026',
        readTime: '5 min read',
        thumb: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
        excerpt: 'From Maxwell’s electromagnetic equations to asynchronous race conditions. How treating software applications as thermodynamic systems reveals bottlenecks that traditional debugging misses.',
        content: `In the Physics lecture halls at the University of Lagos (UNILAG), you learn quickly that nature does not care about your assumptions.

If an experimental harmonic oscillator diverges from its mathematical model, you do not blame the universe; you re-examine the boundary conditions, energy dissipation, and latent friction.

### Software is a Living Thermodynamic System
When an asynchronous system deadlocks or latency spikes under high concurrency, many developers resort to arbitrary trial-and-error adjustments. 

Viewing the application through first principles changes everything:
- **State Flow as Fluid Dynamics**: Request backpressure in Node.js event loops follows Navier-Stokes fluid mechanics. When input rate exceeds discharge capacity, turbulent stagnation is inevitable.
- **State Immutability as Conservation Laws**: In thermodynamics, energy cannot appear from void. In React applications, unexplained UI bugs occur when state is mutated outside the deterministic cycle, creating "ghost entropy."

### The 3-Step First-Principles Debugging Protocol
1. **Define the Exact Boundary State**: Strip away logs until you isolate the smallest input delta that triggers the discrepancy.
2. **Trace the Energy Transfer**: Follow the data payload through every hop—browser event, network socket, reverse proxy, server worker, database disk write.
3. **Eliminate Non-Deterministic Variables**: Fix time, seed random generators, and test under deterministic constraints.

When you master the discipline of physical science, no codebase is ever intimidating—because every bug obeys deterministic laws.`
    },
    {
        id: 'echoes-in-silicon',
        category: 'poetry',
        categoryLabel: 'Poetry & Spoken Word',
        title: 'Echoes in Silicon: Verses on Creation, Lagos Nights & The Human Pulse',
        date: 'June 24, 2026',
        readTime: '3 min read',
        thumb: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=900&q=80',
        excerpt: 'A spoken word piece performed under the vibrant night sky of Lagos, capturing the raw tension between deterministic computer algorithms, late-night inspiration, and the African soul.',
        isPoem: true,
        content: `They asked me how a poet writes code,
and how a physicist bleeds ink onto a page.
I told them the terminal is just another stage,
where logic dances on the wire
and dreams refuse to be caged.

*The midnight hum of Lagos hums low,*
*neon reflections on a matte black screen.*
*Between the brackets and semicolons,*
*lies the fragile rhythm of what might have been.*

We build kingdoms out of zero and one,
we calculate orbits before the rising of the sun.
Yet when the logic resolves and the servers sigh,
it is the pulse of the human heart
that answers the question: *Why?*

Do not tell me poetry has no syntax,
or that engineering has no soul.
For in the silence of the compile,
both strive to make the broken whole.`
    },
    {
        id: 'motherboard-diagnostics-2am',
        category: 'software',
        categoryLabel: 'Systems & Hardware',
        title: 'Motherboard Diagnostics at 2 AM: What Soldering Iron Burns Teach You About Code',
        date: 'May 12, 2026',
        readTime: '4 min read',
        thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
        excerpt: 'Before container clusters and high-level frameworks, there was circuit board continuity testing with a multimeter. Why physical hardware fundamentals make you a fearless software engineer.',
        content: `Modern software development is insulated by layers of comfortable abstraction: Docker containers, cloud lambdas, garbage-collected virtual machines, and reactive component frameworks.

Abstractions are fantastic until they leak. And when they leak, the developer who only knows high-level syntax panics.

### The Multimeter Mentality
During my apprenticeship at Suf-Del Communications, diagnosing dead motherboards was an exercise in pure patience. A tiny surface-mount capacitor with a short circuit can bring an entire enterprise server to a standstill.

You don't guess. You take a digital multimeter, check voltage rails, follow the schematic trace from the power IC through the inductor chokes, and measure micro-ohms of resistance.

### How Hardware Grounding Transforms Software Engineering
1. **You Understand What Memory Actually Is**: You stop imagining variables as ethereal concepts and recognize them as electrical states in silicon gates. You write cache-friendly loops because you respect L1/L2 hardware memory architecture.
2. **You Never Fear the Operating System**: System calls, file descriptors, network buffers, and interrupt requests are no longer black boxes.
3. **Resilience Under Pressure**: After you have successfully replaced an SMD chip with a micro-soldering iron under a microscope, resolving a production deployment failure feels like a calm walk in the park.`
    },
    {
        id: 'the-human-interface',
        category: 'speaking',
        categoryLabel: 'Public Speaking & Ideas',
        title: 'The Human Interface: How to Explain Deep Technical Architecture to Non-Engineers',
        date: 'April 5, 2026',
        readTime: '5 min read',
        thumb: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
        excerpt: 'The biggest failure in modern technology isn’t algorithmic complexity—it’s communication. How vocal cadence, storytelling metaphors, and emotional intelligence turn skeptical stakeholders into believers.',
        content: `The most brilliantly engineered distributed system is worthless if the CEO, the client, or the venture investor cannot understand what problem it solves.

Too many brilliant technical minds believe that using dense engineering jargon proves competence. In truth, it proves the opposite: a lack of empathetic abstraction.

### 1. Metaphor is Your Most Powerful Compelling Weapon
Never explain an API gateway by reciting HTTP status codes and token bucket rate limits. 
Explain it as an airport security checkpoint:
- The API Gateway is the TSA officer verifying passports.
- The Load Balancer is the gate agent directing passengers to the open boarding bridge.
- The Database is the central baggage conveyor system.

Instantly, every non-technical stakeholder in the boardroom nods in unison.

### 2. Pacing, Vocal Cadence, and Space
In public speaking and poetry as Poet Sony, the power of a line lives in the pause right before it. 

When presenting an architectural decision to executive leadership:
- Do not rush to fill silence.
- State the business vulnerability. *Pause.*
- Introduce your technical antidote with conviction.
- Quantify the commercial impact: revenue saved, latency eradicated, customer trust preserved.

When you treat technical presentation as an art of oratory, you cease being just a coder—you become a leader.`
    },
    {
        id: 'the-circuit-and-the-solitude',
        category: 'poetry',
        categoryLabel: 'Poetry & Spoken Word',
        title: 'The Circuit and the Solitude',
        date: 'February 28, 2026',
        readTime: '2 min read',
        thumb: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80',
        excerpt: 'Lines penned in the stillness between compile cycles. When the terminal goes silent, the fans spin down, and the only reality left is the rhythm of your own thoughts.',
        isPoem: true,
        content: `In the quiet between compile cycles,
when the fan spins down its whir,
the room settles into a sacred stillness,
and the edges of the world blur.

*A single cursor blinks upon the void,*
*a metronome keeping pace with thought.*
*In the architecture of the mind,*
*what cannot be bought must be wrought.*

Through copper lines and silicon gates,
the current finds its predetermined road.
Yet in the solitude of creation,
it is the human spirit that bears the load.

We write not merely to make machines execute,
we write so the future remembers
we were here, we dared, and we spoke.`
    }
];

const Blog = ({ onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeModalPost, setActiveModalPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveModalPost(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const filteredPosts = selectedCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(p => p.category === selectedCategory);

    const getCategoryBadgeClass = (category) => {
        switch(category) {
            case 'software': return 'categorySoftware';
            case 'physics': return 'categoryPhysics';
            case 'poetry': return 'categoryPoetry';
            case 'speaking': return 'categorySpeaking';
            default: return 'categorySoftware';
        }
    };

    return (
        <main className="blogPageWrapper">
            <div className="blogContainer">
                {/* Back Navigation */}
                <div className="blogBackNav">
                    <button 
                        onClick={onBack} 
                        className="blogBackBtn"
                        aria-label="Back to home"
                    >
                        <ArrowLeftIcon size={16} />
                        <span>Back to Home</span>
                    </button>
                </div>

                {/* Blog Header */}
                <header className="blogHeader">
                    <span className="blogEyebrow">
                        <BookOpenIcon size={16} />
                        LITERARY & TECHNICAL ESSAYS
                    </span>
                    <h1 className="blogTitle">Thoughts, Verses & Code.</h1>
                    <p className="blogSubtitle">
                        Reflections on full-stack architecture, physical systems, poetic rhythm, and building software that moves people.
                    </p>
                </header>

                {/* Category Filters Bar */}
                <div className="blogFilterBar" role="tablist">
                    <button 
                        className={`filterPill ${selectedCategory === 'all' ? 'activeFilterPill' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        All Works ({blogPosts.length})
                    </button>
                    <button 
                        className={`filterPill ${selectedCategory === 'software' ? 'activeFilterPill' : ''}`}
                        onClick={() => setSelectedCategory('software')}
                    >
                        Software & Systems
                    </button>
                    <button 
                        className={`filterPill ${selectedCategory === 'physics' ? 'activeFilterPill' : ''}`}
                        onClick={() => setSelectedCategory('physics')}
                    >
                        Applied Physics
                    </button>
                    <button 
                        className={`filterPill ${selectedCategory === 'poetry' ? 'activeFilterPill' : ''}`}
                        onClick={() => setSelectedCategory('poetry')}
                    >
                        Poetry & Spoken Word
                    </button>
                    <button 
                        className={`filterPill ${selectedCategory === 'speaking' ? 'activeFilterPill' : ''}`}
                        onClick={() => setSelectedCategory('speaking')}
                    >
                        Public Speaking
                    </button>
                </div>

                {/* 3-Column Post Cards Grid */}
                <section className="blogGrid">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <article 
                                key={post.id} 
                                className="blogCard"
                                onClick={() => setActiveModalPost(post)}
                            >
                                <div className="blogCardThumbWrapper">
                                    <img 
                                        src={post.thumb} 
                                        alt={post.title} 
                                        className="blogCardThumb" 
                                        loading="lazy" 
                                    />
                                </div>

                                <div className="blogCardContent">
                                    <div className="blogCardMetaRow">
                                        <span className={`categoryBadge ${getCategoryBadgeClass(post.category)}`}>
                                            {post.categoryLabel}
                                        </span>
                                        <span className="blogCardReadTime">
                                            <ClockIcon size={13} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="blogCardTitle">{post.title}</h2>
                                    <p className="blogCardExcerpt">{post.excerpt}</p>

                                    <div className="blogCardFooter">
                                        <span className="blogAuthorTag">By Poet Sony</span>
                                        <span className="blogReadPrompt">
                                            <span>{post.isPoem ? 'Read Poem' : 'Read Article'}</span>
                                            <ArrowUpRightIcon size={14} />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="blogEmptyState">
                            <p>No pieces found in this category currently.</p>
                        </div>
                    )}
                </section>
            </div>

            {/* Interactive Reading Modal */}
            {activeModalPost && (
                <div 
                    className="blogModalOverlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setActiveModalPost(null);
                    }}
                >
                    <div className="blogModalContainer">
                        <button 
                            className="blogModalCloseBtn" 
                            onClick={() => setActiveModalPost(null)}
                            aria-label="Close reading view"
                        >
                            <CloseIcon size={18} />
                        </button>

                        <div className="blogModalContent">
                            <header className="blogModalHeader">
                                <div className="blogModalMeta">
                                    <span className={`categoryBadge ${getCategoryBadgeClass(activeModalPost.category)}`}>
                                        {activeModalPost.categoryLabel}
                                    </span>
                                    <span className="blogCardReadTime">
                                        <ClockIcon size={14} />
                                        {activeModalPost.readTime}
                                    </span>
                                    <span className="blogCardReadTime">•</span>
                                    <span className="blogCardReadTime">{activeModalPost.date}</span>
                                </div>

                                <h1 className="blogModalTitle">{activeModalPost.title}</h1>

                                <div className="blogModalAuthorRow">
                                    <span>Authored by <strong>Poet Sony</strong> (Oluwaniyi Amao)</span>
                                </div>
                            </header>

                            <div className="blogModalBody">
                                {activeModalPost.isPoem ? (
                                    <div className="poetryStanza">
                                        {activeModalPost.content}
                                    </div>
                                ) : (
                                    activeModalPost.content.split('\n\n').map((paragraph, pIdx) => {
                                        if (paragraph.startsWith('### ')) {
                                            return <h3 key={pIdx} style={{ color: '#fff', fontSize: '1.3rem', margin: '1.8rem 0 0.8rem' }}>{paragraph.replace('### ', '')}</h3>;
                                        }
                                        if (paragraph.startsWith('```')) {
                                            const code = paragraph.replace(/```(sql|typescript)?\n/g, '').replace(/```/g, '');
                                            return <pre key={pIdx} className="technicalCodeSnippet"><code>{code}</code></pre>;
                                        }
                                        return <p key={pIdx}>{paragraph}</p>;
                                    })
                                )}
                            </div>

                            <footer className="blogModalFooter">
                                <span className="blogModalShareLabel">Enjoyed this piece? Discuss with Poet Sony:</span>
                                <a 
                                    href={`https://wa.me/+2349159767637?text=Hi%20Poet%20Sony,%20I%20just%20read%20your%20piece%20"${encodeURIComponent(activeModalPost.title)}"%20and%20wanted%20to%20share%20my%20thoughts!`}
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="btn-primary"
                                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.86rem' }}
                                >
                                    <WhatsAppIcon size={16} />
                                    <span>Discuss on WhatsApp</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Blog;
