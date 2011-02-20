(function( $ ){
	$.fn.growlAlert = function(opts, data){
		$self = this;
		
		//settings for growl
		settings = {
			autoShow : true,
			fadeTime : 600,
			delayTime : 5000,
			title : 'Growl Alert Title',
			content : 'This is the content for the growl alert test message, woo!'
		};
		
		//HTML to insert
		growlHTML = '<a href="#" class="close-link"><img src="http://www.linnnk.com/demos/images/close-icon.png" width="20px" height="20px" /></a><div class="title"></div><div class="content"></div>';
		
		//methods for growl
		methods = {
			show : function(data){
			    if (data){
			        if (data.title){
			            $self.children('.title').text(data.title);
			        }
			        if (data.content){
			            $self.children('.content').text(data.content);
			        }
			    }
			    
				return $self.fadeIn(settings.fadeTime).delay(settings.delayTime).fadeOut(settings.fadeTime);
			}
		};
		
		//if some sort of opts was passed in
		if (opts){
			//check to see if it's a method
			if (methods[opts]){
				return methods[opts](data);
			}
			//otherwise just treat it as options
			else{
				$.extend(settings, opts);
			}
		}
		
		//insert the HTML if none is there
		if (this.html() == ''){
			this.html(growlHTML);
		}
		
		//objects
		this.hide();
		$close = this.find('.close-link');
		$title = this.children('.title');
		$content = this.children('.content');
		
		//set the text
		$title.text(settings.title);
		$content.text(settings.content);
		
		//close button click
		$close.click(function(){
			//stop any animations running now
			$self.stop(true, true);
			//fade out the dialog
			$self.fadeOut(settings.fadeTime);
			//prevent default action on the close link
			return false;
		});
		
		//show immediately
		if (settings.autoShow){
		    return $self.growlAlert('show');
		}
	}
})( jQuery );