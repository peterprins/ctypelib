/*!
  * cTypeLib - v1.0
  * https://github.com/peterprins/ctypelib
  *
  * Copyright 2015 Peter Prins
  * Released under the MIT license
  * http://mit-license.org/
  *
  * Date: 2015-04-20
  */

var $ctype = {

	// get content type
  	getType: function( filename_str ){
		if( typeof filename_str == 'string' ){

			// get file extension
			var ext = filename_str.match(/\.([^\.]+)$/g);

			try{
				return eval( "this" + ext );
			}catch(e){
				return false;
			}
		}
    },

	au:
	'audio/basic',

	avi:
	'video/x-msvideo',

	bmp:
	'image/bmp',

	css:
	'text/css',

	doc:
	'application/msword',

	docx:
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

	eot:
	'application/vnd.ms-fontobject',

	exe:
	'application/x-msdownload',

	flv:
	'video/x-flv',

	form:
	'application/x-www-form-urlencoded;charset=UTF-8',

	gif:
	'image/gif',

	gzip:
	'application/x-gzip',

	htm:
	'text/html',

	html:
	'text/html',

	hqx:
	'application/mac-binhex40',

	jar:
	'application/java-archive',

	javascript:
	'text/javascript',

	jpg:
	'image/jpeg',

	jpeg:
	'image/jpeg',

	js:
	'text/javascript',

	json:
	'application/json',

	m3u:
	'audio/x-mpegurl',

	m4v:
	'video/x-m4v',

	mid:
	'audio/midi',

	mov:
	'video/quicktime',

	mpga:
	'audio/mpeg',

	mpeg:
	'video/mpeg',

	mp4a:
	'audio/mp4',

	mp4:
	'video/mp4',

	multi:
	'multipart/form-data',

	ogx:
	'application/ogg',

	oga:
	'audio/ogg',

	ogv:
	'video/ogg',

	otf:
	'application/x-font-otf',

	pdf:
	'application/pdf',

	psd:
	'image/vnd.adobe.photoshop',

	pic:
	'image/x-pict',

	png:
	'image/png',

	ppt:
	'application/vnd.ms-powerpoint',

	pptx:
	'application/vnd.openxmlformats-officedocument.presentationml.presentation',

	rtf:
	'application/rtf',

	rss:
	'application/rss+xml',

	sit:
	'application/x-stuffit',

	sitx:
	'application/x-stuffitx',

	swf:
	'application/x-shockwave-flash',

	svg:
	'image/svg+xml',

	tar:
	'application/x-tar',

	text:
	'text/plain',

	tgz:
	'application/x-compressed',

	tiff:
	'image/tiff',

	ttf:
	'application/x-font-ttf',

	txt:
	'text/plain',

	unityweb:
	'application/vnd.unity',

	uu:
	'text/x-uuencode',

	wav:
	'audio/x-wav',

	woff:
	'application/x-font-woff',

	wm:
	'video/x-ms-wm',

	wma:
	'video/x-ms-wma',

	wmx:
	'video/x-ms-wmx',

	wmv:
	'video/x-ms-wmv',

	wri:
	'application/x-mswrite',

	wrl:
	'model/vrml',

	wvx:
	'video/x-ms-wvx',

	wmf:
	'application/x-msmetafile',

	xap:
	'application/x-silverlight-app',

	xhtml:
	'application/xhtml+xml',

	xml:
	'application/xml',

	xls:
	'application/vnd.ms-excel',

	zip:
	'application/zip'

 }