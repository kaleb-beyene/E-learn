import React from "react";

function Sectionafter() {
  return (
    <div>
      <div class="section">
        <div class="courses-enroll-wrapper">
          <div class="courses-video-player">
            <div class="vidcontainer">
              <video id="myvid"></video>

              <div class="video-play-bar">
                <div class="topControl">
                  <div class="progress">
                    <span class="bufferBar"></span>
                    <span class="timeBar"></span>
                  </div>
                  <div class="time">
                    <span class="current"></span> /
                    <span class="duration"></span>
                  </div>
                </div>

                <div class="controllers">
                  <div class="controllers-left">
                    <button class="prevvid disabled" title="Previous video">
                      <i class="icofont-ui-previous"></i>
                    </button>
                    <button class="btnPlay" title="Play/Pause video"></button>
                    <button class="nextvid" title="Next video">
                      <i class="icofont-ui-next"></i>
                    </button>
                    <button
                      class="sound sound2"
                      title="Mute/Unmute sound"
                    ></button>
                    <div class="volume" title="Set volume">
                      <span class="volumeBar"></span>
                    </div>
                  </div>

                  <div class="controllers-right">
                    <button class="btnspeed" title="Video speed">
                      <i class="fa fa-gear"></i>
                    </button>
                    <ul class="speedcnt">
                      <li class="spdx50">1.5</li>
                      <li class="spdx25">1.25</li>
                      <li class="spdx1 selected">Normal</li>
                      <li class="spdx050">0.5</li>
                    </ul>
                    <button class="btnFS" title="full screen"></button>
                  </div>
                </div>
              </div>

              <div class="bigplay" title="play the video">
                <i class="fa fa-play"></i>
              </div>

              <div class="loading">
                <div class="spinner-border spinner">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>

            <div class="courses-enroll-content">
              <div class="courses-enroll-title">
                <h2 class="title">
                  {" "}
                  Data Science and Machine Learning with Python{" "}
                </h2>
              </div>

              <div class="courses-enroll-tab">
                <div class="enroll-tab-menu">
                  <ul class="nav">
                    <li>
                      <button
                        class="active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Overview
                      </button>
                    </li>
                    <li>
                      <button data-bs-toggle="tab" data-bs-target="#tab2">
                        Description
                      </button>
                    </li>
                    <li>
                      <button data-bs-toggle="tab" data-bs-target="#tab3">
                        Certificates
                      </button>
                    </li>
                    <li>
                      <button data-bs-toggle="tab" data-bs-target="#tab4">
                        Instructor
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="enroll-share">
                  <a href="#">
                    <i class="icofont-share-alt"></i> Share
                  </a>
                </div>
              </div>

              <div class="courses-enroll-tab-content">
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab1">
                    <div class="overview">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="enroll-tab-title">
                            <h3 class="title">Course Details</h3>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="enroll-tab-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley of
                              type scrambled it to make a type specimen book. It
                              has survived not’s only and five centuries, but
                              also the lea into electronic typesetting,
                              remaining priting essentially unchanged. It was
                              popularsed in the 1960 with containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>

                            <table class="table">
                              <tbody>
                                <tr>
                                  <th>
                                    Instructor <span>:</span>
                                  </th>
                                  <td>Pamela Foster</td>
                                </tr>
                                <tr>
                                  <th>
                                    Duration <span>:</span>
                                  </th>
                                  <td>08 hr 15 mins</td>
                                </tr>
                                <tr>
                                  <th>
                                    Lectures <span>:</span>
                                  </th>
                                  <td>2,16</td>
                                </tr>
                                <tr>
                                  <th>
                                    Level <span>:</span>
                                  </th>
                                  <td>Secondary</td>
                                </tr>
                                <tr>
                                  <th>
                                    Language <span>:</span>
                                  </th>
                                  <td>English</td>
                                </tr>
                                <tr>
                                  <th>
                                    Caption’s <span>:</span>
                                  </th>
                                  <td>Yes</td>
                                </tr>
                              </tbody>
                            </table>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley of
                              type scrambled it to make a type specimen book.
                            </p>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley of
                              type scrambled it to make a type specimen book.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab2">
                    <div class="description">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="enroll-tab-title">
                            <h3 class="title">Description</h3>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="enroll-tab-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley of
                              type scrambled it to make a type specimen book. It
                              has survived not’s only and five centuries, but
                              also the lea into electronic typesetting,
                              remaining priting essentially unchanged. It was
                              popularsed in the 1960 with containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>

                            <p class="text">
                              “Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley
                              scrambled it to make a type specimen book.”
                            </p>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley of
                              type scrambled it to make a type specimen book. It
                              has survived not’s only and five centuries, but
                              also the lea into electronic typesetting,
                              remaining priting essentially unchanged. It was
                              popularsed in the 1960 with containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab3">
                    <div class="certificates">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="enroll-tab-title">
                            <h3 class="title">EduLe Certificates</h3>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="enroll-tab-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              industry's standard dummy text ever since the
                              1500s when andom unknown printer took a galley of
                              type scrambled it to make a type specimen book. It
                              has survived not’s only and five centuries, but
                              also the lea into electronic typesetting,
                              remaining priting essentially unchanged. It was
                              popularsed in the 1960 with containing Lorem Ipsum
                              passages desktop publishing software.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab4">
                    <div class="instructor">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="enroll-tab-title">
                            <h3 class="title">Instructor</h3>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="enroll-tab-content">
                            <div class="single-instructor">
                              <div class="review-author">
                                <div class="author-thumb">
                                  <img
                                    src="assets/images/author/author-06.jpg"
                                    alt="Author"
                                  />
                                </div>
                                <div class="author-content">
                                  <h4 class="name">Sara Alexander</h4>
                                  <span class="designation">
                                    Product Designer, USA
                                  </span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      S
                                      tyle="width: 80%;"
                                    ></span>
                                  </span>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                industry's standard dummy text ever since the
                                1500s when andom unknown printer took a galley
                                of type scrambled it to make a type specimen
                                book.
                              </p>
                            </div>

                            <div class="single-instructor">
                              <div class="review-author">
                                <div class="author-thumb">
                                  <img
                                    src="assets/images/author/author-07.jpg"
                                    alt="Author"
                                  />
                                </div>
                                <div class="author-content">
                                  <h4 class="name">Karol Bachman</h4>
                                  <span class="designation">
                                    Product Designer, USA
                                  </span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      Style="width: 80%;"
                                    ></span>
                                  </span>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                industry's standard dummy text ever since the
                                1500s when andom unknown printer took a galley
                                of type scrambled it to make a type specimen
                                book.
                              </p>
                            </div>

                            <div class="single-instructor">
                              <div class="review-author">
                                <div class="author-thumb">
                                  <img
                                    src="assets/images/author/author-03.jpg"
                                    alt="Author"
                                  />
                                </div>
                                <div class="author-content">
                                  <h4 class="name">Gertude Culbertson</h4>
                                  <span class="designation">
                                    Product Designer, USA
                                  </span>
                                  <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      Style="width: 80%;"
                                    ></span>
                                  </span>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                industry's standard dummy text ever since the
                                1500s when andom unknown printer took a galley
                                of type scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="courses-video-playlist">
            <div class="playlist-title">
              <h3 class="title">Course Content</h3>
              <span>80 Lessons (8h 15m)</span>
            </div>
            <div class="video-playlist">
              <div class="accordion" id="videoPlaylist">
                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <p>
                      Lesson-01: Data Science
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link active"
                        href="https://www.youtube.com/watch?v=7eh4d6sabA0"
                      >
                        <p>01. Mathematics</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>02. Probability</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>03. Statistics</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>04. </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          05. 
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>06. Into  essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>07. </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>08. </p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <p>
                      Lesson-02: Python
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://www.bing.com/videos/riverview/relatedvideo?&q=python+docs&&mid=35A5DBFBBDF86B304E5D35A5DBFBBDF86B304E5D&&FORM=VRDGAR"
                      >
                        <p>09. Values and types </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://www.bing.com/videos/riverview/relatedvideo?q=python%20docs&mid=0363D794BE8FA0952EA20363D794BE8FA0952EA2&ajaxhist=0"
                      >
                        <p>10.Variables </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://www.bing.com/videos/riverview/relatedvideo?q=python%20docs&mid=22974E7A865AFCAE96EB22974E7A865AFCAE96EB&ajaxhist=0"
                      >
                        <p>11. class list</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>12.  Variable names and keywords</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          13. 
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>14. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>15. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>16. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <p>
                      Lesson-03:  if Statements
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>17. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>18. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>19. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>20. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          21. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>22. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>23. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>24. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    <p>
                      Lesson-04:  User Input and while Loops
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>25. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>26. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>27. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>28. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          29. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>30. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>31. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>32. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    <p>
                      Lesson-05: Working with Lists
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>33. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>34. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>35. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>36. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          37. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>38. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>39. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>40. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                  >
                    <p>
                      Lesson-06: Functions

                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>41. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>42. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>43. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>44. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          45. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>46. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>47. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>48. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSaven"
                  >
                    <p>
                      Lesson-07: Classes
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseSaven"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>49. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>50. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>51. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>52. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          53. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>54. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>55. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>56. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                  >
                    <p>
                      Lesson-08: Files and Exceptions
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>57. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>58. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>59. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>60. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          61. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>62. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>63. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>64. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                  >
                    <p>
                      Lesson-09: Strings
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseNine"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>65. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>66. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>67. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>68. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          69. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>70. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>71. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>72. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div class="accordion-item">
                  <button
                    class="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                  >
                    <p>
                      Lesson-10:  Tuples
                    </p>
                    <span class="total-duration">01 hour 48 minutes</span>
                  </button>

                  <div
                    id="collapseTen"
                    class="accordion-collapse collapse"
                    data-bs-parent="#videoPlaylist"
                  >
                    <nav class="vids">
                      <a
                        class="link"
                        href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119"
                      >
                        <p>73. The Complete Medicine Masterclass</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119"
                      >
                        <p>74. Standard dummy text ever since the</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119"
                      >
                        <p>75. Printer took a galley of type and scrambled</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119"
                      >
                        <p>76. It to make a type specimen book & break</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4"
                      >
                        <p>
                          77. Survived not only five centuries also the leap
                        </p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4"
                      >
                        <p>78. Into typesettingremaining essentially</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4"
                      >
                        <p>79. Unchanged. It was popularised in the 1960s</p>
                        <span class="total-duration">08 minutes</span>
                      </a>

                      <a
                        class="link"
                        href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4"
                      >
                        <p>80. The release of Letraset sheets containing</p>
                        <span class="total-duration">08 minutes</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionafter;
