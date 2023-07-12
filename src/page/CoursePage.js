import React from 'react';
import '../assets/css/theme.css';
import tutorImage from '../assets/images/tutor.jpg';
import course1 from '../assets/images/course-1.jpg';
import course2 from '../assets/images/course-2.jpg';
import course3 from '../assets/images/course-3.jpg';
import tutorsm from '../assets/images/tutor.jpg';

function Page() {
      return (
        <div>
          <title>100 Days of DSA</title>
          {/* Google Font */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:800|Roboto:400,500,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
          
          <header className="header">
            <section className="hero-section">
              <div className="hero-mask">
              </div>{/*//hero-mask*/}
              <div className="container text-center py-5">
                <div className="single-col-max mx-auto">
                  <div className="hero-heading-upper pt-3 mb-3">Learn DSA in Just 100 Days! <br className="d-md-none" />Like A Pro</div>
                  <h1 className="hero-heading mb-5">
                    <span className="brand mb-4 d-block"><span className="text-highlight pr-2">{'/*'}</span><span className="name">100 Days of DSA</span><span className="text-highlight pl-2">{'*/'}</span></span>
                    <span className="desc d-block">Crack interviews of top tech based companies in just 100 days! </span>
                  </h1>
                  <div className="text-center mb-5">
                    <a href="#section-pricing" className="btn btn-primary btn-lg scrollto">Start Learning Now</a>
                  </div>
                  <div className="hero-summary">
                    <div className="row">
                      <div className="item col-4">
                        <div className="summary-desc mb-1"><i className="icon fas fa-video me-2" />Content</div>
                        <h4 className="summary-heading">80+ <span className="desc">Videos</span></h4>
                      </div>{/*//col*/}
                      <div className="item col-4">
                        <div className="summary-desc mb-1"><i className="icon fas fa-clock me-2" />Duration</div>
                        <h4 className="summary-heading">72 <span className="desc">Hours</span></h4>
                      </div>{/*//col*/}
                      <div className="item col-4">
                        <div className="summary-desc mb-1"><i className="icon fas fa-user-circle me-2" />Rating</div>
                        <h4 className="summary-heading">4.3/5.0</h4>
                      </div>{/*//col*/}
                    </div>{/*//row*/}
                  </div>{/*//hero-summary*/}
                </div>{/*//single-col-max*/}
              </div>{/*//container*/}
            </section>{/*//hero-section*/}
          </header>{/*//header*/}
          <div className="sections-wrapper">
            <div className="section-blocks mb-5">
              <div id="section-overview" className="section-overview section pt-md-4 pt-lg-5">
                <div className="container py-5">
                  <div className="section-col-max mx-auto">
                    <h3 className="section-title mb-4">What Will You Learn</h3>
                    <p className="mb-4">Your course overview goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae posuere nibh, at posuere enim. Sed vulputate ante congue, euismod odio a, gravida neque. Maecenas volutpat risus dolor.</p>
                    <div className="text-center mb-3">
                      <ul className="column-list list-unstyled mx-auto d-inline-block">
                        <li><i className="theme-check-icon fas fa-check me-2" />Step By Step Solution</li>
                        <li><i className="theme-check-icon fas fa-check me-2" />Live Doubt Solving</li>
                        <li><i className="theme-check-icon fas fa-check me-2" />30+ Different Techniques</li>
                        <li><i className="theme-check-icon fas fa-check me-2" />Tech Interview Preparation</li>
                        <li><i className="theme-check-icon fas fa-check me-2" />Simplified</li>
                        <li><i className="theme-check-icon fas fa-check me-2" />Solve interview problems step by step</li>
                      </ul>
                    </div>{/*//text-center*/}
                    <div className="text-center mb-5">
                      <a className="btn btn-primary scrollto" href="#section-pricing">Join Course Now</a>
                    </div>
                    <div className="video-container">
                      <div className="ratio ratio-16x9">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/vrawHbGgWww" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div>
                    </div>{/*//video-container*/}
                  </div>{/*//section-col-max*/}
                </div>{/*//container*/}
              </div>{/*//section-overview*/}
              <div id="section-content" className="section-content section">
                <div className="container py-5">
                  <div className="section-col-max mx-auto">
                    <h3 className="section-title mb-5">What's Included</h3>
                    <div className="data-summary justify-content-center text-center">
                      <div className="row mb-5">
                        <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
                          <div className="data">10+</div>
                          <div className="meta">Modules</div>
                        </div>{/*//item*/}
                        <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
                          <div className="data">80+</div>
                          <div className="meta">Videos</div>
                        </div>{/*//item*/}
                        <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
                          <div className="data">40+</div>
                          <div className="meta">Resources</div>
                        </div>{/*//item*/}
                        <div className="item col-6 col-lg-3 mb-3 mb-lg-0">
                          <div className="data">72</div>
                          <div className="meta">Hours</div>
                        </div>{/*//item*/}
                      </div>{/*//row*/}
                    </div>{/*//course-summary*/}
                    <h4 className="text-center mb-4">Course Modules</h4>
                    <div className="accordion module-accordion" id="module-accordion">
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-1">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-1" data-bs-toggle="collapse" data-bs-target="#module-1" aria-expanded="true" aria-controls="module-1">
                              <i className="module-toggle-icon fas fa-minus me-2" />
                              Module 1 - Lorem Ipsum Dolor Sit Amet
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-1" className="module-content collapse show" aria-labelledby="module-heading-1">
                          <div className="card-body p-0">
                            <div className="module-intro p-3">Module intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum elit non neque venenatis, ut mattis sapien lobortis. Integer eget turpis non ipsum convallis convallis vitae eu nunc.</div>
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">1.1</span><a className="video-play-trigger" href="#" data-bs-toggle="modal" data-bs-target="#modal-video">Module Intro Video</a><span className="badge bg-primary ms-2">Preview</span></div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">1.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">1.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">1.4</span>Module Suspendisse Porttitor</div>
                                <div className="col-3 text-end extra-info">07:50</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">1.5</span>Module Related Resources</div>
                                <div className="col-3 text-end extra-info"><span className="icon dripicons-download me-2" />Resources</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-2">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-2" data-bs-toggle="collapse" data-bs-target="#module-2" aria-expanded="true" aria-controls="module-2">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 2 - Lorem Ipsum Dolor Sit Amet
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-2" className="module-content collapse" aria-labelledby="module-heading-2">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">2.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">2.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">2.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-3">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-3" data-bs-toggle="collapse" data-bs-target="#module-3" aria-expanded="true" aria-controls="module-3">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 3 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-3" className="module-content collapse" aria-labelledby="module-heading-3">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">3.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">3.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">3.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-4">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-4" data-bs-toggle="collapse" data-bs-target="#module-4" aria-expanded="true" aria-controls="module-4">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 4 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-4" className="module-content collapse" aria-labelledby="module-heading-4">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">4.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">4.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">4.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-5">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-5" data-bs-toggle="collapse" data-bs-target="#module-5" aria-expanded="true" aria-controls="module-5">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 5 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-5" className="module-content collapse" aria-labelledby="module-heading-5">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">5.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">5.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">5.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-6">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-6" data-bs-toggle="collapse" data-bs-target="#module-6" aria-expanded="true" aria-controls="module-6">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 6 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-6" className="module-content collapse" aria-labelledby="module-heading-6">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">6.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">6.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">6.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-7">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-7" data-bs-toggle="collapse" data-bs-target="#module-7" aria-expanded="true" aria-controls="module-6">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 7 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-7" className="module-content collapse" aria-labelledby="module-heading-7">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">7.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">7.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">7.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-8">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-8" data-bs-toggle="collapse" data-bs-target="#module-8" aria-expanded="true" aria-controls="module-6">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 8 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-8" className="module-content collapse" aria-labelledby="module-heading-8">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">8.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">8.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">8.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-9">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-9" data-bs-toggle="collapse" data-bs-target="#module-9" aria-expanded="true" aria-controls="module-6">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 9 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-9" className="module-content collapse" aria-labelledby="module-heading-9">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">9.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">9.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">9.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                      <div className="module-item card">
                        <div className="module-header card-header" id="module-heading-10">
                          <h4 className="module-title mb-0">
                            <a className="card-toggle module-toggle" href="#module-10" data-bs-toggle="collapse" data-bs-target="#module-10" aria-expanded="true" aria-controls="module-6">
                              <i className="module-toggle-icon fas fa-plus me-2" />
                              Module 10 - Lorem ipsum dolor sit amet. 
                            </a>
                          </h4>
                        </div>{/*//card-header*/}
                        <div id="module-10" className="module-content collapse" aria-labelledby="module-heading-10">
                          <div className="card-body p-0">
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">10.1</span>Module Intro Video</div>
                                <div className="col-3 text-end extra-info">02:30</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">10.2</span>Module Lorem Ipsum</div>
                                <div className="col-3 text-end extra-info">15:20</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                            <div className="module-sub-item p-3">
                              <div className="row justify-content-between">
                                <div className="col-9"><span className="theme-text-secondary me-2">10.3</span>Module Suscipit Arcu</div>
                                <div className="col-3 text-end extra-info">23:15</div>
                              </div>
                            </div>{/*//module-sub-item*/}
                          </div>{/*//card-body*/}
                        </div>{/*//module-content*/}
                      </div>{/*//module-item*/}
                    </div>{/*//module-accordion*/}
                  </div>	            
                </div>{/*//container*/}
              </div>{/*//section-content*/}
              <div id="section-tutor" className="section-tutor section pb-5">			    
                <div className="container">
                  <div className="container-inner p-5 position-relative theme-bg-primary rounded">
                    <div className="section-bg-container" />
                    <div className="row over-section-bg">
                      <div className="col-12 col-lg-3">
                        <div className="tutor-img-holder mb-5 mb-lg-0 text-center">
                          <img className="tutor-profile img-fluid rounded" src={tutorImage} alt="Tutor Image" />
                        </div>{/*//tutor-img-holder*/}
                      </div>{/*//col*/}
                      <div className="col-12 col-lg-9">
                        <div className="pl-lg-4">
                          <h3 className="section-title mb-4 text-white text-lg-start">Meet The Tutor</h3>
                          <p><b>Pratik Singhal</b> is a senior software developer working with Amazon.</p>
                          <p>He has taught over 1000 people live over the past year on Topics like Data Structure & Algorithms, System Design, MERN Full Stack, Java Full Stack and many more.</p>	
                          <div className="text-center text-lg-start">
                            <ul className="social-list list-unstyled mt-4 mb-0 mx-auto mx-lg-0">
                              <li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw" /></a></li> 
                              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw" /></a></li>
                              <li className="list-inline-item"><a href="#"><i className="fa fa-globe fa-fw" /></a></li>
                              <li className="list-inline-item"><a href="#"><i className="fa fa-blog fa-fw" /></a></li>
                            </ul>{/*//social-list*/}	
                          </div>				        
                        </div>
                      </div>{/*//col*/}
                    </div>{/*//row*/}
                  </div>{/*//container-inner*/}
                </div>{/*//container*/}
              </div>{/*//section-tutor*/}
              
              <div id="section-pricing" className="section-pricing py-5">
                <div className="container">
                  <div className="single-col-max mx-auto">
                    <h3 className="text-center mb-5">Join This Course</h3>
                    <div className="pricing-plan">
                      <div className="row">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                          <div className="plan-item rounded">
                            <div className="plan-header">
                              <h4 className="plan-heading rounded-top p-3  theme-bg-primary">Free</h4>
                            </div>{/*//plan-header*/}
                            <div className="plan-details p-4">
                              <div className="plan-desc text-center mb-4">
                                <div className="plan-price">₹0</div>
                                <div className="plan-price-desc">Limited Access</div>
                              </div>
                              <div className="plan-content px-3">
                                <div className="plan-content-intro">Start Free Trial and you'll get:</div>
                                <ul className="plan-content-list list-unstyled">
                                  <li><i className="theme-check-icon fas fa-check me-2" />Access to basic level videos</li>
                                  <li><i className="theme-check-icon fas fa-check me-2" />3 bonus resources</li>
                                </ul>
                              </div>{/*//plan-content*/}
                            </div>{/*//plan-content*/}
                            <div className="plan-cta text-center px-4">
                              <a className="btn btn-ghost btn-block" href="#" target="_blank">Start Free Trial</a>
                            </div>
                          </div>{/*//plan-item*/}
                        </div>{/*//col*/}
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                          <div className="plan-item rounded">
                            <div className="plan-header">
                              <h4 className="plan-heading rounded-top p-3 theme-bg-primary">Premium</h4>
                            </div>{/*//plan-header*/}
                            <div className="plan-details p-4">
                              <div className="plan-desc text-center mb-4">
                                <div className="plan-price">₹999</div>
                                <div className="plan-price-desc">Unlimited Access</div>
                              </div>
                              <div className="plan-content px-3">
                                <div className="plan-content-intro">Join free and you'll get:</div>
                                <ul className="plan-content-list list-unstyled">
                                  <li><i className="theme-check-icon fas fa-check me-2" />Access to all 80+ videos</li>
                                  <li><i className="theme-check-icon fas fa-check me-2" />Access to all 40+ resources</li>
                                  <li><i className="theme-check-icon fas fa-check me-2" />Access to projects source code</li>
                                  <li><i className="theme-check-icon fas fa-check me-2" />Exclusive support forum</li>
                                  <li><i className="theme-check-icon fas fa-check me-2" />Free updates</li>
                                  <li><i className="theme-check-icon fas fa-check me-2" />Digital certificate</li>
                                </ul>
                              </div>{/*//plan-content*/}
                            </div>{/*//plan-content*/}
                            <div className="plan-cta text-center px-4">
                              <a className="btn btn-primary btn-block" href="#" target="_blank">Enrol Now</a>
                            </div>
                          </div>{/*//plan-item*/}
                        </div>{/*//col*/}
                      </div>{/*//row*/}
                    </div>{/*//pricing-plan*/}
                  </div>
                </div>{/*//container*/}
              </div>{/*//section-pricing*/}
              <div id="section-more" className="section section-related py-5">
                <div className="container">
                  <h3 className="section-title mb-5">More Courses You May Like</h3>
                  <div className="related-items row">
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                      <div className="item">
                        <div className="item-thumb">
                          <img className="img-fluid rounded-top" src={course1} alt="Course 1" />
                        </div>{/*//thumb-holder*/}
                        <div className="item-desc p-4 rounded-bottom">
                          <h4 className="title mb-3"><a href="#">Course Title Lorem Ipsum</a></h4>
                          <div className="summary mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquet felis. Suspendisse dignissim neque nibh, vitae vulputate elit luctus accumsan. </div>
                          <div className="text-center">
                            <a className="btn btn-ghost btn-block" href="#">Find out more</a>
                          </div>
                        </div>{/*//desc*/}
                      </div>{/*//item*/}
                    </div>{/*//col*/}
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                      <div className="item">
                        <div className="item-thumb">
                          <img className="img-fluid rounded-top" src={course2} alt="Course 2" />
                        </div>{/*//thumb-holder*/}
                        <div className="item-desc p-4 rounded-bottom">
                          <h4 className="title mb-3"><a href="#">Course Title Lorem Ipsum</a></h4>
                          <div className="summary mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquet felis. Suspendisse dignissim neque nibh, vitae vulputate elit luctus accumsan. </div>
                          <div className="text-center">
                            <a className="btn btn-ghost btn-block" href="#">Find out more</a>
                          </div>
                        </div>{/*//desc*/}
                      </div>{/*//item*/}
                    </div>{/*//col*/}
                    <div className="col-12 col-lg-4">
                      <div className="item">
                        <div className="item-thumb">
                          <img className="img-fluid rounded-top" src={course3} alt="Course 3" />
                        </div>{/*//thumb-holder*/}
                        <div className="item-desc p-4 rounded-bottom">
                          <h4 className="title mb-3"><a href="#">Course Title Lorem Ipsum</a></h4>
                          <div className="summary mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquet felis. Suspendisse dignissim neque nibh, vitae vulputate elit luctus accumsan. </div>
                          <div className="text-center">
                            <a className="btn btn-ghost btn-block" href="#">Find out more</a>
                          </div>
                        </div>{/*//desc*/}
                      </div>{/*//item*/}
                    </div>{/*//col*/}
                  </div>{/*//row*/}
                </div>{/*//container*/}
              </div>{/*//section-8*/}
            </div>{/*//sections-block*/} 
          </div>{/*//section-wrapper*/}
          
          {/* Javascript */}   
        </div>
      );
    }
  
    export default Page;