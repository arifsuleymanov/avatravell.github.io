


var $oPic, $oPicPool, o_drink, o_dining, o_ziqu, o_pool, o_lifestyle,
    v_offset = !1,
    v_drink = !1,
    v_dining = !1,
    v_ziqu = !1,
    v_pool = !1;

function index_ready() {
    isHandheld && windowWidth < 960 && ($startDelta = 1)
}

function index_load() {
    isHandheld ? $("#audio_player").hide() : launch_audio()
}

function set_offset() {
    autosize($(".top_img img")),
    $oPicHeight = windowHeight, 
    $oPicPoolHeight = windowHeight
}

function index_scroll() {
    !v_offset && pageY > $startDelta && (v_offset = !0,
    	setTimeout(function() {
        $(".first_letter").removeClass("hidden")
    }, 300), setTimeout(function() {
        $(".text_first_letter").removeClass("hidden")
    }, 450)), 
    !v_drink && pageY > o_drink && ($(".small_offset").removeClass("hidden")), !v_dining && pageY > o_dining && (v_dining = !0), !v_ziqu && pageY > o_ziqu && (v_ziqu = !0, $(".ziqu .body_text").removeClass("top_hidden")), !v_pool && pageY > o_pool && (v_pool = !0), $(".line_title .line").removeClass("no_width"), $(".line_title .cover, .line_title .content").removeClass("hidden"), $parallax && pageY >= o_parallax - windowHeight && pageY <= o_parallax + windowHeight + $oPicHeight + 100 && ($oPic.style[$$transform[0]] = "translate3d(0," + (-$oPicHeight - (o_parallax - windowHeight - pageY) / 2) + "px, 0)"), $parallax && pageY >= o_pparallax - windowHeight && pageY <= o_pparallax + windowHeight + $oPicPoolHeight + 100 && ($oPicPool.style[$$transform[0]] = "translate3d(0," + (-$oPicPoolHeight - (o_pparallax - windowHeight - pageY) / 2) + "px, 0)")
}

function show_lineset_2() {
    $(".square.shifted.first", $(".line_set._2")).removeClass("hidden_by_scaling_full"), setTimeout(function() {
        $(".square.shifted.first .inline", $(".line_set._2")).removeClass("hidden_by_scaling_full"), $(".line.first", $(".line_set._2")).removeClass("hidden")
    }, 200), setTimeout(function() {
        $(".start_square", $(".line_set._2")).removeClass("hidden_by_scaling_full")
    }, 350), setTimeout(function() {
        $(".line._2", $(".line_set._2")).removeClass("hidden")
    }, 850), setTimeout(function() {
        $(".line.last", $(".line_set._2")).removeClass("hidden")
    }, 1650), setTimeout(function() {
        showSquareLabel($(".welcome_drink .line_set._2"))
    }, 1700)
}
$startDelta = 140;
var AudioContext = window.AudioContext || window.webkitAudioContext || !1;
if (AudioContext) var buf, src, audioCtx = new AudioContext,
    analyser = audioCtx.createAnalyser(),
    gainNode = audioCtx.createGain(),
    playing = !1;
var req = new XMLHttpRequest;

function launch_audio() {
    if (window.AudioContext || window.webkitAudioContext || !1) {
        function e() {
            playing = !0, (src = audioCtx.createBufferSource()).buffer = buf, gainNode.gain.setValueAtTime(1, audioCtx.currentTime), src.connect(gainNode), gainNode.connect(analyser), analyser.connect(audioCtx.destination), src.loop = !0, src.start(0)
        }
        req.open("GET", "/music/music.mp3", !0), req.responseType = "arraybuffer", req.onload = function() {
            audioCtx.decodeAudioData(req.response, function(i) {
                buf = i, $("#audio_player").bind("click", function() {
                    playing ? (gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1), setTimeout(function() {
                        src.stop(0), playing = !1
                    }, 1e3)) : e()
                }), isHandheld || e()
            })
        }, req.send();
        new Uint8Array(analyser.frequencyBinCount);
        var i = document.getElementById("canvas"),
            t = i.width,
            o = i.height - 2,
            n = 1,
            a = 2,
            l = "#fff",
            s = 80,
            r = [];
        canvasCtx = i.getContext("2d"), gradient = canvasCtx.createLinearGradient(0, 0, 0, 60), gradient.addColorStop(1, "#CCCCCC"), gradient.addColorStop(.3, "#999999"), gradient.addColorStop(0, "#666666"),
            function e() {
                var i = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(i);
                var _ = Math.round(i.length / s);
                canvasCtx.clearRect(0, 0, t, o);
                for (var d = 0; d < s; d++) {
                    var c = i[d * _] / 6;
                    r.length < Math.round(s) && r.push(c), canvasCtx.fillStyle = l, c < r[d] ? canvasCtx.fillRect(3 * d, o - --r[d], n, a) : (canvasCtx.fillRect(3 * d, o - c, n, a), r[d] = c), canvasCtx.fillStyle = gradient, canvasCtx.fillRect(3 * d, o - c + a, n, o)
                }
                requestAnimationFrame(e)
            }()
    } else $("#audio_player").hide()
}